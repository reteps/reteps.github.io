<script lang="ts">
  import Link from '$lib/components/Link.svelte'
  import { FilterIcon, CodeIcon, LinkIcon } from "svelte-feather-icons"

  const content = [
    {
      'title': 'Title',
      'description': 'Description',
      'image': 'https://via.placeholder.com/1000',
      'source': 'https://github.com/reteps',
      'link': 'https://example.com',
      'tags': ['tag1', 'tag2', 'tag3'],
      'categories': ['Featured', 'category1']
    },
    {
      'title': 'Title',
      'description': 'Description',
      'image': 'https://scontent.fdet1-2.fna.fbcdn.net/v/t39.30808-6/292775604_379634807486518_2661977746830899357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FS8J6BzCFLEAX8rDjje&_nc_ht=scontent.fdet1-2.fna&oh=00_AfCfLb4IjoDx9mNXtQhu8bzQfwuhW4V-JFWw3E7dtoJ77g&oe=63ADD009',
      'tags': ['tag1', 'tag2', 'tag3'],
      'categories': ['Featured', 'category2']
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
          <img src={item.image} class="max-h-96" alt={item.title} />
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