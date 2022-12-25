export async function load({ params }){
  const post = await import(`../${params.slug}/index.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
  }
}
