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
      'image': 'https://via.placeholder.com/1000',
      'tags': ['tag1', 'tag2', 'tag3'],
      'categories': ['category2']
    }
  ]


  $: categories = [...new Set(content.map(item => item.categories).flat())]

  let selected: string = 'Featured'

  $: filteredContent = content.filter(item => {
    return item.categories.includes(selected)
  });

  const linkClass = ''
  $: buttonClass = (category: string) => {
    return selected === category ? `bg-purple-200 text-purple-600 p-5` : 'p-5 hover:bg-purple-200 hover:text-purple-600 transition duration-300';
  }
</script> 
<div class="flex flex-col lg:flex-row">
  <div class="flex flex-col lg:w-1/5 sticky h-full top-0">
    <h1 class="text-4xl font-bold text-purple-600 mb-10 mt-10">
      Showcase
     </h1> 
    <button class={`p-5 flex flex-row cursor-default border-2 border-black`}>
      <FilterIcon class='mr-2'/> Filter
    </button>
    {#each categories as category}
      <button class={buttonClass(category)} data-category={category} on:click={e => selected = e.target.dataset.category}>
        {category}
      </button>
    {/each}
  </div>
  <div class="flex flex-col lg:w-4/5 lg:ml-40">
    <div class="text-end"> Showing {filteredContent.length} of {content.length} results</div>
    {#each filteredContent as item}
      <div class="flex flex-col">
        <div class="flex flex-row justify-center">
          <img src={item.image} alt={item.title} />
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <h3>{item.title}</h3>
            <div class="flex flex-row">
              {#if item.link}
              <Link {linkClass} href={item.link}><LinkIcon /></Link>
              {/if}
              {#if item.source}
              <Link {linkClass} href={item.source}><CodeIcon /></Link>
              {/if}
            </div>
          </div>
          <p>{item.description}</p>
          <div class="flex flex-row">
            {#each item.tags as tag}
              <span class="rounded-full text-s px-3 bg-purple-200 text-purple-600 mx-2">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>