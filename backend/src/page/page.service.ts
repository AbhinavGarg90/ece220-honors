import { Injectable } from '@nestjs/common';
import { CreatePageDto, UpdatePageDto } from 'src/common/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PageService {
  constructor(private prisma: PrismaService) {}

  async getPages() {
    return await this.prisma.page.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  async createDefaultPage() {
    return await this.prisma.page.create({
      data: {
        user: {
          create: {
            email: 'eg@gmail.com',
            firstName: 'd',
            lastName: 'f',
            password: 'f',
          },
        },
        title: 'sample title',
      },
    });
  }
  async createPage(createPageDto: CreatePageDto) {
    const user = createPageDto.user;
    return await this.prisma.page.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        title: createPageDto.title,
      },
    });
  }
  async findPageData(pageId: string) {
    return await this.prisma.page.findUnique({
      where: {
        id: pageId,
      },
      include: {
        user: true,
        component: true,
      },
    });
  }
  async updatePage(updatePageDto: UpdatePageDto) {
    console.log(updatePageDto);
    try {
      const idMap = {};
      await Promise.all(
        updatePageDto.createdComponents.map(async (component, index, array) => {
          const createdComponent = await this.prisma.component.create({
            data: {
              page: {
                connect: {
                  id: component.pageId,
                },
              },
              text: component.text,
              type: component.type,
              owner: {
                connect: {
                  id: component.ownerId,
                },
              },
            },
          });
          idMap[component.id] = createdComponent.id;
          array[index].id = createdComponent.id;
        }),
      );
      // now that all components are created, run connections.
      await Promise.all(
        updatePageDto.createdComponents.map(async (component) => {
          await this.prisma.component.update({
            where: {
              id: component.id,
            },
            data: {
              parent: {
                connect: {
                  id: idMap[component.parentId] || component.parentId,
                },
              },
            },
          });
        }),
      );

      await Promise.all(
        updatePageDto.updatedComponents.map(async (component) => {
          await this.prisma.component.update({
            where: {
              id: idMap[component.id] || component.id,
            },
            data: {
              text: component.text,
            },
          });
        }),
      );
      // initially only create, do not connect.

      return { success: true };
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }
}
