<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import LinkedinIcon from 'svelte-feather-icons/src/icons/LinkedinIcon.svelte';
  import GithubIcon from 'svelte-feather-icons/src/icons/GithubIcon.svelte';
  import MailIcon from 'svelte-feather-icons/src/icons/MailIcon.svelte';
  import SkipBackIcon from 'svelte-feather-icons/src/icons/SkipBackIcon.svelte';

</script>

<footer class="sm:ml-20 sm:mr-20 flex flex-col justify-center">
  <div class="flex flex-row mb-5 justify-center lg:justify-start">
    <h1 class="text-2xl font-bold text-purple-700 dark:text-green-700">
      Let's stay in touch.
    </h1>
  </div>
  <div class="flex flex-col lg:flex-row justify-start">
    <div class="flex flex-row justify-center">
      <a href="https://www.linkedin.com/in/pete-stenger/" rel="noreferrer" aria-label="LinkedIn">
        <LinkedinIcon class="mx-5 hover transition duration-300 hover:text-purple-700 dark:hover:text-green-700 dark:text-white hover:scale-110" />
      </a>
      <a href="https://github.com/reteps" rel="noreferrer" aria-label="Github">
        <GithubIcon class="mx-5 hover transition duration-300 hover:text-purple-700 dark:hover:text-green-700 dark:text-white hover:scale-110" />
      </a>
      <a href="mailto:pete@stenger.io" aria-label="Email">
        <MailIcon class="mx-5 hover transition duration-300 hover:text-purple-700 dark:hover:text-green-700 dark:text-white hover:scale-110" />
      </a>
    </div>
    <div class="text-sm text-gray-500 dark:text-gray-200 lg:ml-auto flex flex-row justify-center items-center lg:mt-0 mt-5">
      <Link href="/time-machine/2020" simple class="flex flex-row items-center mr-1"><SkipBackIcon size=14 /></Link>
      <div class="mr-1">/ © {new Date().getFullYear()} Pete Stenger / </div>
      <Link href="https://github.com/reteps/reteps.github.io" simple>Source</Link>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    height: 20vh;
  }
</style>