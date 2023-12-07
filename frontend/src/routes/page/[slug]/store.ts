import type { ComponentObject, IComponent} from "$lib/interfaces";
import { writable } from "svelte/store";

export const componentDataStore = writable<ComponentObject>({})

// TODO: figure out typing for list below
export const updatedComponentListStore = writable<string[]>([])

export const createdComponentListStore = writable<string[]>([])

export const editMode = writable<boolean>(false)
export function toggleEditMode() {
  editMode.update((state)=> !state)
}

export const componentListStore = writable<IComponent[]>([])