<script>
  import Giscus from '@giscus/svelte'
  import SEO from "$lib/components/SEO.svelte";
  import { darkTheme } from "$lib/stores";
  export let data
  const { Content, meta: { title, description, date } } = data
  $: theme = $darkTheme ? 'dark' : 'light'
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
    <div class="not-prose">
        <Giscus
        repo="reteps/reteps.github.io"
        repoId="R_kgDOIq_g7w"
        categoryId="DIC_kwDOIq_g784CTdFf"
        mapping="specific"
        reactionsEnabled="1"
        emitMetadata="0"
        term="{title}"
        inputPosition="bottom"
        {theme}
        lang="en"
        loading="lazy"
      />
    </div>
  </div>
</article>


<style lang="scss">
  .prose {
    max-width: min(100vw, 65ch);
  }
</style>