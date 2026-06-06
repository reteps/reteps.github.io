<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import FilterIcon from '@lucide/svelte/icons/funnel';
  import CodeIcon from '@lucide/svelte/icons/code';
  import LinkIcon from '@lucide/svelte/icons/link';
  import GlobeIcon from '@lucide/svelte/icons/globe';
  import TrashIcon from '@lucide/svelte/icons/trash-2';

  type ShowcaseItem = {
    title: string;
    description: string;
    image: { src: string; srcset: string };
    source?: string;
    link?: string;
    languages: string[];
    technologies: string[];
    categories: string[];
  };

  export let content: ShowcaseItem[];

  $: categories = ['Everything', ...new Set(content.map((item) => item.categories).flat())];
  $: languages = [...new Set(content.map((item) => item.languages).flat())];

  let selected: string = 'Everything';
  let selectedLanguages: string[] = [];

  $: filteredContent = content.filter((item) => {
    return (
      (item.categories.includes(selected) || selected === 'Everything') &&
      (selectedLanguages.every((language) => item.languages.includes(language)) ||
        selectedLanguages.length === 0)
    );
  });

  $: buttonClass = (category: string) => {
    return selected === category
      ? `pl-5 text-left shrink-0 bg-purple-100 text-purple-700 dark:bg-green-100 dark:text-green-700 p-3 m-1 rounded-xl`
      : 'pl-5 text-left shrink-0 p-3 m-1 dark:hover:bg-green-100 dark:hover:text-green-700 hover:bg-purple-100 hover:text-purple-700 transition duration-300 rounded-xl dark:text-white';
  };

  $: languageClass = (language: string) => {
    return selectedLanguages.includes(language)
      ? `shrink-0 rounded-lg text-s px-3 bg-blue-100 border-2 border-blue-100 mb-2 text-blue-700 mx-2 items-center cursor-pointer`
      : `shrink-0 rounded-lg text-s px-3 hover:bg-blue-100 hover:border-blue-100 hover:text-blue-700 border-2 dark:border-slate-400 border-slate-500
     mb-2 text-slate-700 mx-2 items-center cursor-pointer dark:hover:border-blue-100 dark:hover:text-blue-700 dark:text-slate-200`;
  };

  function toggleLanguage(language: string) {
    if (selectedLanguages.includes(language)) {
      selectedLanguages = selectedLanguages.filter((item) => item !== language);
    } else {
      selectedLanguages = [...selectedLanguages, language];
    }
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
    <h1 class="text-4xl font-bold text-purple-700 dark:text-green-700 mb-10 mt-10">Showcase</h1>
    <div
      class={`m-3 mx-20 dark:border-slate-500 border-slate-400 dark:text-white p-2 flex flex-row justify-center border-b-2`}
    >
      <FilterIcon class="mr-2" /> Filter
    </div>
    {#each categories as category}
      <button
        class={buttonClass(category)}
        on:click={() => {
          selected = category;
          scrollIntoView();
        }}
      >
        {category}
      </button>
    {/each}
    <div
      class={`m-3 mx-10 border-slate-400 p-2 dark:text-white flex flex-row justify-center border-b-2`}
    >
      <GlobeIcon class="mr-2" /> Languages
    </div>
    <div class="flex flex-row flex-wrap justify-center">
      {#each languages as language}
        <button
          type="button"
          class={languageClass(language)}
          on:click={() => toggleLanguage(language)}>{language}</button
        >
      {/each}
      <button
        type="button"
        class="rounded-lg text-s px-3 dark:border-slate-400 border-slate-500 text-slate-700 dark:text-slate-200
      hover:text-red-700 hover:bg-red-100 hover:border-red-100 dark:hover:text-red-700 dark:hover:border-red-100
        border-2 mx-2 mb-2 flex flex-row items-center cursor-pointer justify-between viewbox-fix"
        on:click={() => {
          selectedLanguages = [];
          scrollIntoView();
        }}
      >
        <span class="mr-2">Clear</span>
        <TrashIcon size="14" />
      </button>
    </div>
    <div class="text-center mt-10 dark:text-white">
      Showing {filteredContent.length} of {content.length} results
    </div>
  </div>
  <div class="flex flex-col lg:w-4/5 lg:pl-20 mt-10 lg:mt-40">
      {#each filteredContent as item}
      <div class="flex flex-col rounded-lg border-2 border-t-0 border-dashed border-slate-400 dark:border-slate-500 pb-2 mb-10 lg:mb-20">
        <div class="flex flex-row justify-center item">
          <img
            class="rounded-t-md"
            src={item.image.src}
            srcset={item.image.srcset}
            sizes="(max-width: 1024px) 100vw, 60vw"
            alt={item.title}
            loading="lazy"
          />
        </div>
        <div class="flex flex-col mt-5 dark:text-white px-10">
          <div class="flex flex-col lg:flex-row justify-between">
            <h2 class="text-2xl lg:text-3xl">{item.title}</h2>
            <div class="flex flex-row items-center mt-3 lg:mt-0">
              {#if item.link}
                <Link href={item.link} class="ml-0" aria-label="Site"><LinkIcon /></Link>
              {/if}
              {#if item.source}
                <Link href={item.source} class="{!item.link ? 'ml-0' : ''}" aria-label="Source"><CodeIcon /></Link>
              {/if}
            </div>
          </div>
          <p class="mt-5">{@html item.description}</p>
          <div class="flex flex-row flex-wrap justify-end mt-3">
            {#each item.languages as language}
              <span
                class="shrink-0 rounded-lg text-sm lg:text-base px-2 mb-2 bg-blue-100 text-blue-700 mx-2"
                >{language}</span
              >
            {/each}
            {#each item.technologies as technology}
              <span
                class="shrink-0 rounded-lg text-sm lg:text-base px-2 mb-2 bg-purple-100 text-purple-700 dark:bg-green-100 dark:text-green-700 mx-2"
                >{technology}</span
              >
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .viewbox-fix {
    margin: 0 8px 8px;
  }
</style>
