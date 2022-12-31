<script lang="ts">
  import { HomeIcon, SkipForwardIcon, SkipBackIcon } from "svelte-feather-icons"
  export let year : String
  export let years : String[]
  const linkClass = `flex flex-col justify-center mx-5
  transition duration-300 hover:scale-110 flex-shrink-0
  dark:hover:text-green-600`;

  $: previousYear = years[years.indexOf(year) - 1] || null
  $: nextYear = years[years.indexOf(year) + 1] || null
</script>
<style>
  header {
    height: 10vh;
  }
  </style>
  
  <header class={"fixed lg:pr-20 lg:pl-20 top-0 pt-10 flex flex-col justify-center pointer-events-none z-10"}>
    <nav class="flex justify-center lg:justify-end">
      <ul class="flex flex-row items-center dark:text-white text-black
       lg:bg-white dark:bg-black lg:p-3 lg:rounded-full lg:border-2 dark:border-white border-black pointer-events-auto"> 
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
             <div class="text-slate-400">
               <SkipForwardIcon />
             </div>
           {/if}
         </li>
      </ul>
    </nav>
  </header>