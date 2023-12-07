import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/common/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createDefaultUser() {
    return await this.prisma.user.create({
      data: {
        email: 'ag@gmail.com',
        password: 'pass',
        firstName: 'a',
        lastName: 'garg',
      },
    });
  }
  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        password: createUserDto.password,
      },
    });
  }
}
