<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { formatDate } from '$lib/utils'
  import CalendarIcon from 'svelte-feather-icons/src/icons/CalendarIcon.svelte';
  import Link from '$lib/components/Link.svelte'
  export let data: any
  </script>

<SEO title="Blog posts" description="All of my blog posts." />

<div class="content px-10 pt-10 dark:text-white">
  <h1 class="text-4xl mb-5">Posts</h1>
  
  <ul>
    {#each data.posts as post}
    <li class="mb-3">
      <div>

        <h2>
          <Link class="text-xl" href={post.path} simple>
            {post.meta.title}
          </Link>
        </h2>
      </div>
        <div class="lg:w-1/2">
          {post.meta.description}
        </div>
        <div class="flex flex-row items-center">
        <CalendarIcon class="mr-2" size="16"/> {formatDate(post.meta.date)}
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