<script>
  export let data
  const { Content, meta: { title, date } } = data
</script>

<article class="flex flex-col mx-10 dark:text-white items-center">
  <div class="header">
    <h1 class="text-4xl">{title}</h1>
    <p>Published: {date}</p>
  </div>
  <div class="prose pt-10 dark:prose-invert">
    <Content />
  </div>
</article>


<style lang="scss">
  .header {
    width: 65ch; /* mirror prose max-width */
  }
</style>