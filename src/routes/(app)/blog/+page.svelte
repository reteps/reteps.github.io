<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { CalendarIcon } from 'svelte-feather-icons';
  import Link from '$lib/components/Link.svelte'
  export let data: any
  console.log(data)
  </script>

<SEO title="Blog posts" description="All of my blog posts." />

<div class="content px-10 pt-20 dark:text-white">
  <h1 class="text-3xl mb-3">Posts</h1>
  
  <ul>
    {#each data.posts as post}
    <li class="mb-3">
      <div>

        <h2>
          <Link href={post.path} simple>
            {post.meta.title}
          </Link>
        </h2>
      </div>
        <div class="flex flex-row items-center">
        <CalendarIcon class="mr-2" size="16"/> {post.meta.date}
      </div>
    </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .content {
    min-height: 70vh;
  }
</style>