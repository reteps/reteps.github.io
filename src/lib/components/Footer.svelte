<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import LinkedinIcon from '~icons/mdi/linkedin';
  import GithubIcon from '~icons/mdi/github';
  import MailIcon from '@lucide/svelte/icons/mail';
  import SkipBackIcon from '@lucide/svelte/icons/skip-back';

</script>

<footer class="ml-5 mr-5 mt-5 mb-5 sm:ml-20 sm:mr-20 sm:mt-10 sm:mb-10 flex flex-col justify-center">
  <!-- <div class="flex flex-row mb-5 justify-center lg:justify-start">
    <h1 class="text-2xl font-bold text-purple-700 dark:text-green-700">
      Let's stay in touch.
    </h1>
  </div> -->
  <div class="flex flex-row justify-between">
    <div class="flex flex-row items-center">
      <a href="https://www.linkedin.com/in/peter-stenger/" rel="noreferrer" aria-label="LinkedIn">
        <LinkedinIcon class="mx-5 hover transition duration-300 hover:text-purple-700 dark:hover:text-green-700 dark:text-white hover:scale-110" />
      </a>
      <a href="https://github.com/reteps" rel="noreferrer" aria-label="Github">
        <GithubIcon class="mx-5 hover transition duration-300 hover:text-purple-700 dark:hover:text-green-700 dark:text-white hover:scale-110" />
      </a>
      <a href="mailto:peter@stenger.io" aria-label="Email">
        <MailIcon class="mx-5 hover transition duration-300 hover:text-purple-700 dark:hover:text-green-700 dark:text-white scale-90 hover:scale-100" />
      </a>
    </div>
    <div class="text-sm text-gray-500 dark:text-gray-200 flex flex-row items-center">
      <Link href="/time-machine/2020" simple class="mr-1"><SkipBackIcon size=14 /></Link>
       <div class="mr-1">/</div>
      <Link href="https://github.com/reteps/reteps.github.io" simple>Source</Link>
    </div>
  </div>
</footer>