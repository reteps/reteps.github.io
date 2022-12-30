export async function load({ params } : { params: any }){
  const post = await import(`../../../../../blog/${params.slug}/index.md`)

  return {
    meta : { ...post.metadata },
    Content: post.default,
  }
}
