<script lang="ts">
  import { ArrowDownCircleIcon } from 'svelte-feather-icons';
  import Link from '$lib/components/Link.svelte';
  import Showcase from '$lib/components/Showcase.svelte';
  import { darkTheme } from '$lib/stores';

  $: hacker = $darkTheme;

  function scrollIntoView() {
    const el = document.getElementById('showcase');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  function rotateArrow({ clientX, clientY } : MouseEvent) {
    const el = document.getElementById('arrow');
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI;
    el.style.transform = `rotate(${90+angle}deg)`;
  }
</script>

<div id="intro" class="flex flex-col" on:mousemove={rotateArrow}>
  <div class="flex flex-col-reverse lg:flex-row mx-10 mt-20">
    <div class="lg:w-3/4 text-black dark:text-white">
      <h1 class="text-4xl font-bold text-purple-600 dark:text-green-600">
        Hi! I'm Pete Stenger!
      </h1>
      <p class="mt-5">
        I'm a software developer at the University of Illinois Urbana Champaign (<Link href="https://illinois.edu/" simple>UIUC</Link>) studying computer science. I'm passionate about open source software, cybersecurity, and education.
      </p>
      <h3 class="text-xl font-bold mt-10">Currently...</h3>
      <ul class="list-disc">
        <li>
          In my second year of a combined 3+1 undergraduate/graduate MCS <Link href="https://cs.illinois.edu/academics/graduate/fifth-year-masters-programs/5-year-bs-ms-program" simple>program</Link>.
        </li>
        <li>
          A software developer for <Link href="https://uiuc.hack4impact.org" simple>Hack4Impact</Link>, where I program for nonprofits.
        </li>
        <li>
          An admin for <Link href="https://sigpwny.com/" simple>SIGPwny</Link>, an ACM special interest group focused on cybersecurity and the largest educational RSO on campus.
        </li>
      </ul>
    </div>
    <div class="flex flex-row justify-center mb-10">
      <img src={hacker ? '/headshot_hacker.png' : '/headshot.png'} on:mouseover={() => hacker = true} on:focus={() => hacker = true} on:mouseleave={() => hacker = false} class="rounded-full w-1/2 lg:w-3/5 shadow-lg" alt="Pete" />
    </div>
  </div>
  <div class="flex-row items-end flex-grow hidden lg:flex">
    <a id="arrow" class="mx-auto text-purple-400 dark:text-green-400 mb-5 hover:text-purple-600 dark:hover:text-green-600" href="#showcase" on:keydown={scrollIntoView} on:click|preventDefault={scrollIntoView}>
      <ArrowDownCircleIcon size="48" />
    </a>
  </div>
</div>
<div id="showcase" class="flex flex-col min-h-screen mx-10 mt-20">
  <Showcase />
</div>
<style lang="scss">
  #intro {
    height: 90vh;
  }
</style>