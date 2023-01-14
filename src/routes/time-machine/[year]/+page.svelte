<script lang="ts">
	import SEO from "$lib/components/SEO.svelte";
import TimeMachine from "$lib/components/TimeMachine.svelte";
  export let data : any;
  $: years = data.years
  $: year = data.year
  $: src = `/${year}/index.html`
</script>

<TimeMachine {year} {years} />
<SEO title="{year} Time Machine" description="My personal site until the year {year}." />
<iframe {src} class="w-screen h-screen" title={`${year} site`}></iframe>