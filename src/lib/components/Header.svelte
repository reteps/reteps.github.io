<script lang="ts">
  import { HomeIcon } from 'svelte-feather-icons'
  export const linkClass = 'mx-5 hover:underline transition duration-300 hover:text-purple-600 hover:scale-110';
</script>

<header class="lg:sticky top-0 pl-20 pr-20 pt-10 flex flex-col justify-center">
  <nav class="flex justify-end">
    <ul class="flex flex-row text-black lg:bg-white lg:p-3 lg:rounded-full lg:border-2 border-black">
      <li class={linkClass}>
        <a href="/"><HomeIcon /></a>
      </li>
      <li class={linkClass}>
        <a href="/blog">Blog</a>
      </li>
      <li class={linkClass}>
        <a href="/">Resume</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    height: 10vh;
  }
</style>