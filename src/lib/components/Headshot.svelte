<script lang="ts">
  import { theme } from '$lib/stores/theme';

  type ImageData = { src: string; srcset: string };
  export let light: ImageData;
  export let dark: ImageData;

  $: hacker = $theme === 'dark';
  $: image = hacker ? dark : light;
</script>

<img
  src={image.src}
  srcset={image.srcset}
  on:mouseover={() => (hacker = !hacker)}
  on:focus={() => (hacker = !hacker)}
  on:mouseleave={() => (hacker = !hacker)}
  class="rounded-full w-full shadow-lg h-auto block"
  alt="Pete"
/>
