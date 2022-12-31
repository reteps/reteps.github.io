<script lang="ts">
	import TimeMachine from "$lib/components/TimeMachine.svelte";
  export let data : any;
  // console.log(year, years)
  $: years = data.years
  $: year = data.year
  $: src = `/${year}/index.html`
  console.log(src)
</script>
<TimeMachine {year} {years} />
<iframe {src} class="w-screen h-screen" title={`${year} site`}></iframe>