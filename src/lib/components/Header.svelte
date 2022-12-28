<script lang="ts">
  import { HomeIcon, SunIcon, MoonIcon } from 'svelte-feather-icons'
  import { darkTheme } from '$lib/stores'
  export const linkClass = `flex flex-col justify-center mx-5 hover:underline
  transition duration-300 hover:text-purple-600 hover:scale-110 flex-shrink-0
  dark:hover:text-green-600`;
</script>

<header class="lg:sticky lg:pr-20 lg:pl-20 top-0 pt-10 flex flex-col justify-center pointer-events-none">
  <nav class="flex justify-center lg:justify-end">
    <ul class="flex flex-row items-center dark:text-white text-black
     lg:bg-white dark:bg-black lg:p-3 lg:rounded-full lg:border-2 dark:border-white border-black pointer-events-auto">
      <li class={linkClass}>
        <a href="/"><HomeIcon /></a>
      </li>
      <li class={linkClass}>
        <a href="/blog">Blog</a>
      </li>
      <li class={linkClass}>
        <a href="https://drive.google.com/file/d/1ZAKsHNas-5nEJbnqZx5fgJxtUmyMZBeq/view" target="_blank" rel="noreferrer">Resume</a>
      </li>
      <li class={linkClass}>
        <button on:click={() => $darkTheme = !$darkTheme}>
          {#if $darkTheme}
            <SunIcon />
          {:else}
            <MoonIcon />
          {/if}
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    height: 10vh;
  }
</style>