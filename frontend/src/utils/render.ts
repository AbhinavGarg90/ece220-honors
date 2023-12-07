import { ComponentType } from "$lib/enum";
import type { IComponent } from "$lib/interfaces";


export function renderPage(components: IComponent[]): string {
  // find top level components
  const rootComponents: IComponent[]= []
  const childComponents: IComponent[] = []
  components.forEach((component) => {
    if (component.parentId === null) {
      rootComponents.push(component);
      return
    }
    childComponents.push(component);
    return
  })

  let ret = "";
  rootComponents.forEach((rootComponent)=>{
    ret += "<div class=\"container\">" +
     renderRecursive(components, rootComponent.id)
     + "</div>"
  })
  return ret
}

function renderRecursive(components: IComponent[], parentId: string): string {
  const parentComponents: IComponent[] = []
  const childComponents: IComponent[] = []
  components.forEach((component) => {
    if (component.id === parentId) {
      parentComponents.push(component);
      return
    } 
  childComponents.push(component);
  return
  })
  let ret = "";
  parentComponents.forEach((parentComponent)=>{
    ret += `<div class="${parentComponent.type.toLowerCase()}">`
    + parentComponent.text
    + renderRecursive(childComponents, parentComponent.id )
    + "</div>"
  })
  
  return ret
}
