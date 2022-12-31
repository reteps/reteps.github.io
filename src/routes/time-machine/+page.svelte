<script lang="ts">
  export let data
  let { years } = data
</script>
<p>You aren't supposed to see this page. It is required by SvelteKit in order to crawl to each time-machine year. </p>
{#each years as year}
<a href={`/time-machine/${year}`}>{year}</a>
{/each}