<script lang="ts">
  import { Button } from "carbon-components-svelte";
	import type { ComponentObject, IComponent, IPageData } from '$lib/interfaces';
	import RootComponentPage from './RootComponentPage.svelte';
	import { saveToServer } from "./formactions";
	import { writable, type Writable } from "svelte/store";
	import { componentListStore, editMode, toggleEditMode } from "./store";
  export let data
  let componentData: IPageData  = data.componentData
  componentListStore.set(componentData.component)

</script>

<h1>{data.componentData.title}</h1>
<h3 class="created-by">Page created by: {data.componentData.user.firstName}</h3>
{#key $componentListStore}
<div style="padding-left:2%">
<RootComponentPage components={$componentListStore} parentId={null} indent={0}/>
</div>
 {/key}
 
 <button class="button-6" on:click={toggleEditMode}>
  {$editMode ? "Stop editing" : "Edit" }
</button>
<button class="button-6" on:click={saveToServer}>
  Save page data
</button>

<style>
 

.created-by {
  font-style: italic;
  margin-bottom: 2%;
}
/* CSS */
.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  margin: 1%;
  margin-left: 0%;
  margin-top: 3%;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

</style>
