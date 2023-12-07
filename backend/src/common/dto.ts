import { ComponentType } from '@prisma/client';
import { IComponent, IPage, IUser } from './interfaces';

export class CreatePageDto {
  user: IUser;
  title: string;
}

export class CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class CreateComponentDto {
  text: string;
  type: ComponentType;
  owner: Pick<IUser, 'id'>;
  page: Pick<IPage, 'id'>;
}
// news
export class AddComponentDto extends CreateComponentDto {
  parent: Pick<IComponent, 'id'>;
}

export class UpdatePageDto {
  updatedComponents: IComponent[];
  createdComponents: IComponent[];
}
