<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import { LinkedinIcon, GithubIcon, MailIcon, CodeIcon } from 'svelte-feather-icons'
</script>

<footer class="ml-20 mr-20 flex flex-col justify-center">
  <div class="flex flex-row mb-5 justify-center lg:justify-start">
    <h1 class="text-2xl font-bold text-purple-600 dark:text-green-600">
      Let's stay in touch.
    </h1>
  </div>
  <div class="flex flex-col lg:flex-row justify-start">
    <div class="flex flex-row justify-center">
      <a href="https://www.linkedin.com/in/pete-stenger/" target="_blank" rel="noreferrer">
        <LinkedinIcon class="mx-5 hover transition duration-300 hover:text-purple-600 dark:hover:text-green-600 dark:text-white hover:scale-110" />
      </a>
      <a href="https://github.com/reteps" target="_blank" rel="noreferrer">
        <GithubIcon class="mx-5 hover transition duration-300 hover:text-purple-600 dark:hover:text-green-600 dark:text-white hover:scale-110" />
      </a>
      <a href="mailto:pete@stenger.io">
        <MailIcon class="mx-5 hover transition duration-300 hover:text-purple-600 dark:hover:text-green-600 dark:text-white hover:scale-110" />
      </a>
    </div>
    <div class="text-sm text-gray-500 dark:text-gray-200 lg:ml-auto flex flex-row justify-center lg:mt-0 mt-5">
      <div class="mr-1">© {new Date().getFullYear()} Pete Stenger / </div>
      <Link href="https://github.com/reteps/reteps.github.io" simple>Source</Link>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    height: 20vh;
  }
</style>