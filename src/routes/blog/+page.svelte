<script lang="ts">
  export let data: any
  </script>

<div class="content px-10 pt-20 dark:text-white">
  <h1>My Blog Posts</h1>
  
  <ul>
    {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .content {
    min-height: 70vh;
  }
</style>