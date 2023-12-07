<script lang="ts">
  
  export let text: string;
  function logText() {
  }
</script>

<div class="sc-paragraph" contenteditable="true" bind:textContent={text}>
  {text}
</div> 

<!-- <button on:click={logText}>
  log-text
</button> -->

<style>
  .sc-paragraph {
    font-family: 'Trebuchet MS', sans-serif;
    font-size: x-large;
    font-weight: bold;
  }
</style>