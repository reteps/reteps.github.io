<script lang="ts">
  import { theme } from '$lib/stores/theme';

  type ImageData = { src: string; srcset: string };
  export let light: ImageData;
  export let dark: ImageData;

  // Track real hover state instead of toggling, so missed enter/leave
  // events can never leave the image stuck in the inverted state.
  let hovered = false;
  $: hacker = ($theme === 'dark') !== hovered;
</script>

<!-- Shadow lives on the outer wrapper; the inner one clips the hover
     target to the visible circle so the square corners don't trigger it. -->
<div class="rounded-full shadow-lg">
  <div
    class="relative [clip-path:circle(50%)]"
    role="img"
    aria-label="Peter Stenger headshot"
    on:pointerenter={() => (hovered = true)}
    on:pointerleave={() => (hovered = false)}
  >
    <!-- Both images stay in the DOM and crossfade, so hovering never
         triggers a fresh download or a layout change. -->
    <img
      src={light.src}
      srcset={light.srcset}
      alt=""
      class="block w-full h-auto rounded-full transition-opacity duration-300"
      class:opacity-0={hacker}
    />
    <img
      src={dark.src}
      srcset={dark.srcset}
      alt=""
      class="absolute inset-0 w-full h-full rounded-full transition-opacity duration-300"
      class:opacity-0={!hacker}
    />
  </div>
</div>
