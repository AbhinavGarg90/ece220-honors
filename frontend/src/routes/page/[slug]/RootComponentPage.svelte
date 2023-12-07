<script lang="ts">
	import type { IComponent } from "$lib/interfaces";
	import List from "./(components)/list.svelte";
	import Paragraph from "./(components)/paragraph.svelte";

  export let components: IComponent[];
  export let parentId: string | null;
  export let indent: number;
  let parentComponents: IComponent[] = []
  let childComponents: IComponent[] = []
  $: components.forEach((component)=>{
    if (component.parentId === parentId ) {
      parentComponents = [...parentComponents, component]
      return
    }
    childComponents = [...childComponents, component]
    return
  })
</script>

<div style="padding-left: {indent}px">
  {#each parentComponents as parent (parent.id)}
    <div>

      {#if parent.type === "LIST"}
      <List component={parent}/>
      {:else if parent.type === "PARAGRAPH"}
      <Paragraph text={parent.text}/>
      {:else}
      Boring Component
      {/if}
      <svelte:self components={childComponents} parentId={parent.id} indent={indent+24}>
      </svelte:self>
    </div>
  {/each}

</div>

