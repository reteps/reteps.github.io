<script lang="ts">
  export let data;
  let { year } = data;
  const src = `/${year}/index.html`
</script>
<iframe {src} class="w-screen h-screen" title={`${year} site`}></iframe>