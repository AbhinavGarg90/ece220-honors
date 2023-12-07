<script lang="ts">
	import { ComponentType } from "$lib/enum";
	import type { ComponentObject, IComponent } from "$lib/interfaces";
	import { componentDataStore, componentListStore, createdComponentListStore, editMode, updatedComponentListStore } from "../store";
  import {v4 as uuid4} from 'uuid'

  export let component: IComponent;
  const componentId = component.id;

  componentDataStore.update((componentObject: ComponentObject) => {
    componentObject[componentId] = component
    return componentObject
  })
  // TODO: Figure out event type
  function logEvent(event: any) {
    componentDataStore.update(store => {
     store[componentId].text = event.target.textContent;
     updatedComponentListStore.update(listStore => {

      !listStore.includes(component.id) ? listStore.push(component.id): null;
      return listStore
     })
     return store 
    });
  }
  function createElement(event: any) {
    componentListStore.update((store)=> {
      const newComponent = {
        id: uuid4(), // uuid created temporarily on frontend, not the same as backend
        parentId: component.id,
        text: "created component text",
        type: ComponentType.LIST,
        pageId: component.pageId,
        ownerId: component.ownerId
      } as IComponent
      store = [...store, newComponent]
      createdComponentListStore.update(listStore => {
      !listStore.includes(newComponent.id) ? listStore.push(newComponent.id): null;
      return listStore
      })
      return store
    })
    return
  }
  function deleteComponent(event: any) {

  }
</script>

<div class="sc-container">
  <div class="sc-list" contenteditable={$editMode} on:blur={logEvent}>
    <li>
      {component.text}
    </li>
  </div>
  <button class="sc-button" on:click={createElement}>+</button>
  <button class="sc-button" on:click={deleteComponent}>-</button>
</div>

<style>
  /* Flex container to place items inline */
  .sc-container {
    display: flex;
    align-items: center;
  }

  .sc-list {
    font-family: 'Trebuchet MS', sans-serif;
    color: rgb(71, 25, 90);
    /* Add your list styles here */
  }

  /* Button styles */
  .sc-button {
    color:rgb(222, 173, 255); /* Text color */
    border: none;
    padding: 2px 4px; /* Adjust padding to make it smaller */
    cursor: pointer;
    background: none; /* Remove background */
  }
</style>