import { DEV_API_URL } from "$lib/constants";
import type { IComponent, ComponentObject } from "$lib/interfaces";
import { updatedComponentListStore, componentDataStore, createdComponentListStore } from "./store";

export async function saveToServer() {
  const updatedData: {[key: string]: IComponent[]} = {updatedComponents: [], createdComponents: []}
  let updatedComponentList: string[] = []
  let createdComponentList: string[] = []
  let componentData: ComponentObject = {};
  updatedComponentListStore.subscribe(store => {
    updatedComponentList = store
    return store
  })
  createdComponentListStore.subscribe(store => {
    createdComponentList = store
    return store
  })
  componentDataStore.subscribe((store) => {
    componentData = store
    return store
  })
  updatedComponentList.forEach((updatedComponentId) => {
    updatedData.updatedComponents.push(componentData[updatedComponentId])
  })
  createdComponentList.forEach((createdComponentId) => {
    updatedData.createdComponents.push(componentData[createdComponentId])
  }) 
  try {
    //TODO: add endpoint after making on backend
    const response = await fetch(`${DEV_API_URL}/page/update-page`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      console.log('failed to make put request')
      return {success: false}
    }
    } catch(e) {
      console.log(e)
      return {success: false}
    }
  location.reload()
  return {success: true}
}