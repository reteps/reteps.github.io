<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import { FilterIcon, CodeIcon, LinkIcon } from "svelte-feather-icons"

  const content = [
    {
      'title': 'uiuc-apartments.com',
      'description': 'A website that helps students find apartments near the University of Illinois at Urbana-Champaign. Wrote a web scraper for around 15 rental agencies on campus. Fetch new listings every day and provide a frontend for students to search for apartments.',
      'image': '/showcase/uiuc-apartments.png',
      'source': 'https://github.com/uiuc-apartments/uiuc-apartments.com',
      'link': 'https://www.uiuc-apartments.com/',
      'tags': ['Vue', 'Python', 'Google Cloud', 'TypeScript', 'TailwindCSS', 'Web Scraping'],
      'categories': ['Featured', 'Projects']
    },
    {
      'title': 'My website',
      'description': 'My personal website, built with SvelteKit and TailwindCSS. Blog uses mdsvex. Hosted on Github Pages.',
      'image': '/showcase/website-beta.png',
      'source': 'https://github.com/reteps/reteps.github.io',
      'link': 'https://stenger.io',
      'tags': ['Svelte', 'SvelteKit', 'TailwindCSS', 'mdsvex', 'Github Pages'],
      'categories': ['Projects']
    },
    {
      'title': 'CTF Discord Bot: pwnybot',
      'description': 'A tool for the cybersecurity club @ UIUC to manage CTFs, and perform other useful actions. Autodeployed with Github Actions.',
      'image': '/showcase/pwnybot.png',
      'tags': ['Python', 'Github Actions', 'Discord.py', 'Docker'],
      'categories': ['Projects']
    }
  ]


  $: categories = [...new Set(content.map(item => item.categories).flat())]

  let selected: string = 'Featured'

  $: filteredContent = content.filter(item => {
    return item.categories.includes(selected)
  });

  $: buttonClass = (category: string) => {
    return selected === category ? `bg-purple-200 text-purple-600 p-5` : 'p-5 hover:bg-purple-200 hover:text-purple-600 transition duration-300';
  }

  function scrollIntoView() {
    const el = document.getElementById('showcase');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

</script> 
<div class="flex flex-col lg:flex-row">
  <div class="flex flex-col lg:w-1/5 lg:sticky h-full top-0 justify-center">
    <h1 class="text-4xl font-bold text-purple-600 mb-10 mt-10">
      Showcase
     </h1> 
    <button class={`p-5 flex flex-row cursor-default border-2 border-black`}>
      <FilterIcon class='mr-2'/> Filter
    </button>
    {#each categories as category}
      <button class={buttonClass(category)} data-category={category} on:click={e => { selected = e.target.dataset.category; scrollIntoView() } }>
        {category}
      </button>
    {/each}
    <div class="text-center mt-10"> Showing {filteredContent.length} of {content.length} results</div>
  </div>
  <div class="flex flex-col lg:w-4/5 lg:ml-40 mt-40">
    {#each filteredContent as item}
      <div class="flex flex-col mb-10">
        <div class="flex flex-row justify-center item">
          <img src={item.image} alt={item.title} />
        </div>
        <div class="flex flex-col mt-5 lg:mt-10">
          <div class="flex flex-row justify-between">
            <h3 class="text-3xl">{item.title}</h3>
            <div class="flex flex-row">
              {#if item.link}
              <Link href={item.link}><LinkIcon /></Link>
              {/if}
              {#if item.source}
              <Link href={item.source}><CodeIcon /></Link>
              {/if}
            </div>
          </div>
          <p>{item.description}</p>
          <div class="flex flex-row justify-end">
            {#each item.tags as tag}
              <span class="rounded-full text-s px-3 bg-purple-200 text-purple-600 mx-2">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>