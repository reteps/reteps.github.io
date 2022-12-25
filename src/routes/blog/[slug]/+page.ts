export async function load({ params }){
  const post = await import(`../../../../blog/${params.slug}/index.md`)

  return {
    meta : { ...post.metadata },
    Content: post.default,
  }
}
