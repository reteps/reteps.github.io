<script>
  export let data
  const { Content, meta: { title, date } } = data
</script>

<article class="flex flex-col mx-10">
  <div class="header mx-auto">
    <h1 class="text-4xl">{title}</h1>
    <p>Published: {date}</p>
  </div>
  <div class="prose mx-auto pt-10">
    <Content />
  </div>
</article>


<style lang="scss">
  .header {
    width: 65ch; /* mirror prose max-width */
  }
</style>