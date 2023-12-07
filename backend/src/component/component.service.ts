import { Injectable } from '@nestjs/common';
import { ComponentType } from '@prisma/client';
import { AddComponentDto, CreateComponentDto } from 'src/common/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComponentService {
  constructor(private prisma: PrismaService) {}
  async getComponents() {
    return this.prisma.component.findMany();
  }

  async createDefaultComponent() {
    return await this.prisma.component.create({
      data: {
        text: 'hello world',
        type: ComponentType.LIST,
        owner: {
          connect: {
            id: '0cfb41ef-d930-4d18-a687-440d9fc7a4bb',
            createdAt: '2023-08-27T17:09:04.925Z',
            updatedAt: '2023-08-27T17:09:04.925Z',
            email: 'test-email',
            password: 'sample pass',
            firstName: 'sample name',
            lastName: 'sample last name',
          },
        },
        page: {
          connect: {
            id: 'e71d180b-0572-43ed-ad4a-ea89f5a2b8bb',
          },
        },
      },
    });
  }
  async createComponent(createComponentDto: CreateComponentDto) {
    const owner = createComponentDto.owner;
    const page = createComponentDto.page;
    return await this.prisma.component.create({
      data: {
        text: createComponentDto.text,
        type: createComponentDto.type,
        owner: {
          connect: owner,
        },
        page: {
          connect: page,
        },
      },
    });
  }
  async addComponent(addComponentDto: AddComponentDto) {
    const owner = addComponentDto.owner;
    const page = addComponentDto.page;
    const parentComponent = addComponentDto.parent;
    return await this.prisma.component.create({
      data: {
        text: addComponentDto.text,
        type: addComponentDto.type,
        owner: {
          connect: owner,
        },
        page: {
          connect: page,
        },
        parent: {
          connect: parentComponent,
        },
      },
    });
  }
}
