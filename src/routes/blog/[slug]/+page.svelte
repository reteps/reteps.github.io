<script>
  export let data
  const { Content, meta: { title, date } } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <div class="prose">
    <Content />
  </div>
</article>