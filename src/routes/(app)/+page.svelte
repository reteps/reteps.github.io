<script lang="ts">
  import Headshot from '$img/pfp_cherry.jpg?enhanced&w=1000';
  import HeadshotHacker from '$img/pfp_cherry_hacker.png?enhanced&w=1000';
  import ArrowDownCircleIcon from '@lucide/svelte/icons/circle-arrow-down';
  import Link from '$lib/components/Link.svelte';
  import Showcase from '$lib/components/Showcase.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { darkTheme } from '$lib/stores';
  const seo = {
    title: 'Peter Stenger',
    description:
      "Hi! I'm Peter Stenger, a computer science graduate from the University of Illinois Urbana Champaign (UIUC).",
    image: 'preview.png'
  };

  $: hacker = $darkTheme;
  $: headshot = hacker ? HeadshotHacker : Headshot;

  function scrollIntoView() {
    const el = document.getElementById('showcase');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  function rotateArrow({ clientX, clientY }: MouseEvent) {
    const el = document.getElementById('arrow');
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const angle = (Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI;
    el.style.transform = `rotate(${90 + angle}deg)`;
  }
</script>

<SEO {...seo} />
<svelte:window on:mousemove={rotateArrow} />
<div id="intro" class="flex flex-col">
  <div class="flex flex-col-reverse lg:flex-row mx-10 mt-20">
    <div class="lg:w-3/4 text-black dark:text-white lg:ml-10">
      <h1 class="text-4xl font-bold text-purple-700 dark:text-green-700">Hi! I'm Peter Stenger!</h1>
      <p class="mt-5">
        I'm a software developer at PrairieLearn and a computer science graduate from the University of Illinois Urbana Champaign (<Link
          href="https://illinois.edu/"
          simple>UIUC</Link
        >). I'm passionate about open source software, cybersecurity, and
        education.
      </p>
      <h2 class="text-xl font-bold mt-10">Currently...</h2>
      <ul class="list-disc">
        <li>
          Working :) 👨‍💻
        </li>
        <li>
          I was the president for <Link href="https://sigpwny.com/" simple>SIGPwny</Link>, an ACM special
          interest group focused on cybersecurity and the largest educational RSO on campus. I just graduated from
                    a combined 3+1 undergraduate/graduate MCS <Link
            href="https://cs.illinois.edu/academics/graduate/fifth-year-masters-programs/5-year-bs-ms-program"
            simple>program</Link> program, and TA'd for <Link href="https://courses.grainger.illinois.edu/cs425/fa2024/" simple>CS 425</Link> and CS 128.
        </li>
        <li>
          I was a software developer for <Link href="https://uiuc.hack4impact.org" simple
            >Hack4Impact</Link
          >, where I programmed for nonprofits.
        </li>
      </ul>
    </div>
    <div class="flex flex-row justify-center mb-10">
      <div class="w-1/2 lg:w-3/5">
        <enhanced:img
          src={headshot}
          on:mouseover={() => (hacker = !hacker)}
          on:focus={() => (hacker = !hacker)}
          on:mouseleave={() => (hacker = !hacker)}
          class="rounded-full w-full shadow-lg h-auto block"
          alt="Pete"
        />
      </div>
    </div>
  </div>
  <div class="flex-row items-end flex-grow hidden lg:flex">
    <a
      id="arrow"
      class="mx-auto text-purple-400 dark:text-green-400 mb-5 hover:text-purple-700 dark:hover:text-green-700"
      href="#showcase"
      aria-label="Scroll down"
      on:keydown={scrollIntoView}
      on:click|preventDefault={scrollIntoView}
    >
      <ArrowDownCircleIcon size="48" />
    </a>
  </div>
</div>
<div id="showcase" class="flex flex-col min-h-screen mx-10 mt-20">
  <Showcase />
</div>

<style lang="scss">
  #intro {
    min-height: 90vh;
  }
</style>
