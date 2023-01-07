<script lang="ts">
  import { SkipForwardIcon, SkipBackIcon, MoveIcon, LogOutIcon, HomeIcon } from "svelte-feather-icons"
  import { draggable } from '@neodrag/svelte'
  export let year : String
  export let years : String[]
  const linkClass = `flex flex-col justify-center mx-5
  transition duration-300 hover:scale-110 flex-shrink-0
  dark:hover:text-green-600`;

  const backgroundClass = 'dark:text-white text-black bg-white dark:bg-black dark:border-white border-black'
  $: previousYear = years[years.indexOf(year) - 1] || null
  $: nextYear = years[years.indexOf(year) + 1] || null
</script>

<header use:draggable class={"fixed w-screen lg:pr-20 lg:pl-20 pt-10 flex flex-col justify-center pointer-events-none z-10"}>
  <nav class="flex justify-center lg:justify-end">
    <div class="flex flex-col items-center">
      <ul class="flex flex-row items-center {backgroundClass}
        p-3 rounded-full border-2 pointer-events-auto"> 
      <li class={linkClass}>
          {#if previousYear}
            <a href="/time-machine/{previousYear}"><SkipBackIcon /></a>
          {:else}
            <div class="text-slate-400">
              <SkipBackIcon />
            </div>
          {/if}
        </li>
        <li class={linkClass}>
          {year}
        </li>
        <li class={linkClass}>
          {#if nextYear}
            <a href="/time-machine/{nextYear}"><SkipForwardIcon /></a>
          {:else}
            <a href="/">
              <HomeIcon />
            </a>
          {/if}
        </li>
      </ul>
      <div class="{backgroundClass} cursor-pointer pointer-events-auto p-3 rounded-b-full border-2 border-t-0">
        <MoveIcon />
      </div>
    </div>
  </nav>
</header>