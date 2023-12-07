import { ComponentType } from '@prisma/client';

export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IPage {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface IComponent {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  parentId?: string;
  pageId?: string;
  text: string;
  type: ComponentType;
  ownerId?: string;
}
