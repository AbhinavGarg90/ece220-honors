import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/common/dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('create-default')
  async createDefaultUser() {
    return await this.userService.createDefaultUser();
  }

  @Get('get')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post('create-user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
