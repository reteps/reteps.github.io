<script>
  import SEO from "$lib/components/SEO.svelte";
  export let data
  const { Content, meta: { title, description, date } } = data
  console.log(data)
</script>

<SEO title={title} description={description} />
<article class="flex flex-col dark:text-white items-center">
  <div class="prose prose-sm md:prose-lg lg:prose-xl pt-10 px-10 dark:prose-invert 
  prose-a:break-words prose-code:break-words 
  prose-img:mx-auto
  prose-figcaption:text-center
  ">
    <div class="not-prose">
      <h1 class="text-3xl">{title}</h1>
      <p>Published: <strong>{date}</strong></p>
    </div>
    <Content />
  </div>
</article>


<style lang="scss">
  .prose {
    max-width: min(100vw, 65ch);
  }
</style>