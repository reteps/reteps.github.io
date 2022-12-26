<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import { LinkedinIcon, GithubIcon, MailIcon, CodeIcon } from 'svelte-feather-icons'
</script>

<footer class="ml-20 mr-20 mb-10 mt-10">
  <div class="flex flex-row mb-5">
    <h1 class="text-2xl font-bold text-purple-600">
      Let's stay in touch.
    </h1>
  </div>
  <div class="flex flex-row justify-start">
    <a href="https://www.linkedin.com/in/pete-stenger/" target="_blank" rel="noreferrer">
      <LinkedinIcon class="mx-5 hover transition duration-300 hover:text-purple-600 hover:scale-110" />
    </a>
    <a href="https://github.com/reteps" target="_blank" rel="noreferrer">
      <GithubIcon class="mx-5 hover transition duration-300 hover:text-purple-600 hover:scale-110" />
    </a>
    <a href="mailto:pete@stenger.io">
      <MailIcon class="mx-5 hover transition duration-300 hover:text-purple-600 hover:scale-110" />
    </a>
    <div class="text-sm text-gray-500 ml-auto flex flex-row">
      <div class="mr-1">© {new Date().getFullYear()} Pete Stenger / </div>
      <Link href="https://github.com/reteps/reteps.github.io" simple>Code</Link>
    </div>
  </div>
</footer>