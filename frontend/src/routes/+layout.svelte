<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
	} from "carbon-components-svelte";

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<style>
  /* Add padding to create space between the header and the content */
  .content {
    background-color: white; /* White content background color */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Drop shadow for paper effect */
    padding: 20px; /* Padding for content inside the 'paper' */
    padding-top: 5%;
    margin: 50px; /* Margin for spacing between 'paper' and page edges */
  }
</style>

<Header company="SC-wiki" platformName="the source controlled wiki">
	<HeaderNav>
		<HeaderNavItem href="/home" text="Home" />
		<HeaderNavItem href="/dev" text="Dev" />
	</HeaderNav>
</Header>

<div class="content">
  <slot />
</div>
