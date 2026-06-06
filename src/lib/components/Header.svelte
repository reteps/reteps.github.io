<script lang="ts">
  import HomeIcon from '@lucide/svelte/icons/house';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import { theme, toggleTheme } from '$lib/stores/theme'
  export let fixed = false;
  $: fixedClass = fixed ? 'lg:fixed' : 'lg:sticky';
  $: dark = $theme === 'dark';
  export const linkClass = `flex flex-col justify-center mx-5 hover:underline
  transition duration-300 hover:text-purple-700 hover:scale-110 flex-shrink-0
  dark:hover:text-green-700`;
</script>
<style>
header {
  height: 10vh;
}
</style>

<header class={fixedClass + " lg:pr-20 lg:pl-20 top-0 pt-10 flex flex-col justify-center pointer-events-none z-10"}>
  <nav class="flex justify-center lg:justify-end">
    <ul class="flex flex-row items-center dark:text-white text-black
     lg:bg-white dark:bg-black lg:p-3 lg:rounded-full lg:border-2 dark:border-white border-black pointer-events-auto">
      <li class={linkClass}>
        <a href="/" aria-label="Home"><HomeIcon /></a>
      </li>
      <li class={linkClass}>
        <a href="/blog" aria-label="Blog">Blog</a>
      </li>
      <li class={linkClass}>
        <a href="https://drive.google.com/file/d/1DU8WLrzb4OvWggE9Yy4NxnYn3TK4LT0N/view" rel="noreferrer" aria-label="Resume">Resume</a>
      </li>
      <li class={linkClass}>
        <button on:click={toggleTheme} aria-label="Toggle">
          {#if dark}
            <SunIcon />
          {:else}
            <MoonIcon />
          {/if}
        </button>
      </li>
    </ul>
  </nav>
</header>
