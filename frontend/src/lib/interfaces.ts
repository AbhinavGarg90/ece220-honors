import type { Writable } from "svelte/store";
import type { ComponentType } from "./enum";

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
  user: Pick<IUser, "firstName" | "lastName">
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

export interface IPageData extends IPage {
  user: IUser,
  component: IComponent[]
}

export interface ComponentObject {
  [key: string]: IComponent,
}