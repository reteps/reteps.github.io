<script>
  export let data
  const { title, date, content: Content } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <Content />
</article>