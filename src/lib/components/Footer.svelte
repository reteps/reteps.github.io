<script lang="ts">
  import { LinkedinIcon, GithubIcon, MailIcon } from 'svelte-feather-icons'
</script>

<footer>
  <div class="flex flex-row justify-center">
    <a href="https://www.linkedin.com/in/pete-stenger/" target="_blank" rel="noreferrer">
      <LinkedinIcon class="mx-5 hover transition duration-300 hover:text-purple-600 hover:scale-110" />
    </a>
    <a href="https://github.com/reteps" target="_blank" rel="noreferrer">
      <GithubIcon class="mx-5 hover transition duration-300 hover:text-purple-600 hover:scale-110" />
    </a>
    <a href="mailto:pete@stenger.io">
      <MailIcon class="mx-5 hover transition duration-300 hover:text-purple-600 hover:scale-110" />
    </a>
  </div>
</footer>