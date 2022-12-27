<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import { FilterIcon, CodeIcon, LinkIcon, GlobeIcon, TrashIcon } from "svelte-feather-icons"

  const content = [
    {
      'title': 'uiuc-apartments.com',
      'description': 'A website that helps students find apartments near the University of Illinois at Urbana-Champaign. Wrote a web scraper for around 15 rental agencies on campus. Fetch new listings every day and provide a frontend for students to search for apartments.',
      'image': '/showcase/uiuc-apartments.png',
      'source': 'https://github.com/uiuc-apartments/uiuc-apartments.com',
      'link': 'https://www.uiuc-apartments.com/',
      'languages': ['TypeScript', 'Python'],
      'technologies': ['Vue', 'Google Cloud', 'TailwindCSS'],
      'categories': ['Featured', 'Projects']
    },
    {
      'title': 'My website',
      'description': 'My personal website, built with SvelteKit and TailwindCSS. Blog uses mdsvex. Hosted on Github Pages.',
      'image': '/showcase/website-beta.png',
      'source': 'https://github.com/reteps/reteps.github.io',
      'link': 'https://stenger.io',
      'languages': ['TypeScript'],
      'technologies': ['Svelte', 'SvelteKit', 'TailwindCSS', 'mdsvex', 'Github Pages'],
      'categories': ['Projects']
    },
    {
      'title': 'CTF Discord Bot: pwnybot',
      'description': 'A tool for the cybersecurity club @ UIUC to manage CTFs, and perform other useful actions. Autodeployed with Github Actions.',
      'image': '/showcase/pwnybot.png',
      'languages': ['Python'],
      'technologies': ['CI/CD', 'Discord.py', 'Docker'],
      'link': 'https://github.com/sigpwny/pwnybot',
      'categories': ['Projects']
    },
    {
      'title': 'CTF Platform: PwnyCTF',
      'description': 'An in-house CTF platform for the cybersecurity club @ UIUC. Driven by a Github Action that redeploys the latest challenges to the website and challenge infrastructure to the SIGPwny server. Hooks into Discord using webhooks.',
      'image': '/showcase/pwnyctf.png',
      'source': 'https://github.com/sigpwny/CTFd',
      'link': 'https://ctf.sigpwny.com/',
      'languages': ['Python', 'JavaScript'],
      'technologies': ['Docker', 'CI/CD', 'Django', 'Bootstrap 5'],
      'categories': ['Projects', 'Featured']
    }
  ]


  $: categories = [...new Set(content.map(item => item.categories).flat())]
  $: languages = [...new Set(content.map(item => item.languages).flat())]

  let selected: string = 'Featured'
  let selectedLanguages: string[] = []

  $: filteredContent = content.filter(item => {
    return item.categories.includes(selected) && 
    (selectedLanguages.every(language => item.languages.includes(language)) || selectedLanguages.length === 0);
  });

  $: buttonClass = (category: string) => {
    return selected === category ? `shrink-0 bg-purple-200 text-purple-600 dark:bg-green-200 dark:text-green-600 p-3 m-1 rounded-xl` : 
    'shrink-0 p-3 m-1 dark:hover:bg-green-200 dark:hover:text-green-600 hover:bg-purple-200 hover:text-purple-600 transition duration-300 rounded-xl dark:text-white';
  }

  $: languageClass = (language: string) => {
    return selectedLanguages.includes(language) ?
     `shrink-0 rounded-lg text-s px-3 bg-blue-200 border-2 border-blue-200 mb-2 text-blue-600 mx-2 items-center cursor-pointer` 
     : 'shrink-0 rounded-lg text-s px-3 hover:bg-blue-200 hover:border-blue-200 hover:text-blue-600 border-2 dark:border-slate-400 border-slate-500 mb-2 text-slate-700 mx-2 items-center cursor-pointer dark:text-slate-200';
  }

  function toggleLanguage(language: string) {
    if (selectedLanguages.includes(language)) {
      selectedLanguages = selectedLanguages.filter(item => item !== language);
    } else {
      selectedLanguages = [...selectedLanguages, language];
    }
    console.log(selectedLanguages)
    scrollIntoView();
  }

  function scrollIntoView() {
    const el = document.getElementById('showcase');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

</script> 
<div class="flex flex-col lg:flex-row">
  <div class="flex flex-col lg:w-1/5 lg:sticky h-full top-0 justify-center lg:mx-10">
    <h1 class="text-4xl font-bold text-purple-600 dark:text-green-600 mb-10 mt-10">
      Showcase
     </h1> 
    <div class={`m-3 mx-20 dark:border-slate-500 border-slate-400 dark:text-white p-2 flex flex-row justify-center border-b-2`}>
      <FilterIcon class='mr-2' /> Filter
    </div>
    {#each categories as category}
      <button class={buttonClass(category)} on:click={() => { selected = category; scrollIntoView() } }>
        {category}
      </button>
    {/each}
    <div class={`m-3 mx-10 border-slate-400 p-2 dark:text-white flex flex-row justify-center border-b-2`}>
      <GlobeIcon class='mr-2' /> Languages
    </div>
    <div class="flex flex-row flex-wrap justify-center">
      {#each languages as language}
        <span class={languageClass(language)} on:click={() => toggleLanguage(language)} on:keypress={() => toggleLanguage(language)}>{language}</span>
      {/each}
      <span class="rounded-lg text-s px-3 dark:border-slate-400 border-slate-500 text-slate-700 dark:text-slate-200 hover:text-red-600 hover:bg-red-200 hover:border-red-200
        border-2 mx-2 mb-2 flex flex-row items-center cursor-pointer justify-between viewbox-fix" on:click={() => { selectedLanguages = []; scrollIntoView() }} on:keydown={() => { selectedLanguages = []; scrollIntoView() }}>
        <div class="mr-2">Clear</div><TrashIcon size="14" /> 
      </span>
    </div>
    <div class="text-center mt-10 dark:text-white"> Showing {filteredContent.length} of {content.length} results</div>
  </div>
  <div class="flex flex-col lg:w-4/5 lg:pl-20 mt-10 lg:mt-40">
    {#each filteredContent as item}
      <div class="flex flex-col mb-10">
        <div class="flex flex-row justify-center item">
          <img class="rounded-lg" src={item.image} alt={item.title} />
        </div>
        <div class="flex flex-col mt-5 lg:mt-10 dark:text-white">
          <div class="flex flex-col lg:flex-row justify-between">
            <h3 class="text-3xl">{item.title}</h3>
            <div class="flex flex-row items-center mt-3 lg:mt-0">
              {#if item.link}
              <Link href={item.link}><LinkIcon /></Link>
              {/if}
              {#if item.source}
              <Link href={item.source}><CodeIcon /></Link>
              {/if}
            </div>
          </div>
          <p class="mt-5">{item.description}</p>
          <div class="flex flex-row flex-wrap justify-end mt-3">
            {#each item.languages as language}
              <span class="shrink-0 rounded-lg text-s px-3 mb-2 bg-blue-200 text-blue-600 mx-2">{language}</span>
            {/each}
            {#each item.technologies as technology}
              <span class="shrink-0 rounded-lg text-s px-3 mb-2 bg-purple-200 text-purple-600 dark:bg-green-200 dark:text-green-600 mx-2">{technology}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .viewbox-fix {
    margin: 0 8px 8px;
  }
</style>