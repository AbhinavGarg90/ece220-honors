<script>
  export let data;
</script>

{#each data.postsData as page (page.id)}
  <a href={`/page/${page.id}`} class="page-link">
  <div class="page-card">
    <h2>{page.title}</h2>
    <p>made by {page.user.firstName + " " + page.user.lastName}</p>
  </div>
  </a>
{/each}

<style>
  .page-link {
    color: inherit; /* Inherit color from parent */
    text-decoration: none; /* Remove underline */
  }
  .page-card {
    padding: 16px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    border-radius: 4px;
    background-color: #f8f8f8;
  }
</style>
