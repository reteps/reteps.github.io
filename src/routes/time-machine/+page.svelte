<script lang="ts">
import '$lib/styles/global.css';
import Link from '$lib/components/Link.svelte';
const snapshots = import.meta.glob("../../../static/20[0-9][0-9]/index.html");
const years = Object.keys(snapshots).map((path) => path.match(/20[0-9][0-9]/)[0]);
</script>
<div class="container mt-20">
  <h1 class="text-3xl"> Time machine </h1>
  {#each years as year}
  <Link href={`/time-machine/${year}`}>{year}</Link>
  {/each}
</div>