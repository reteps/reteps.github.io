export async function load({ params } : { params: any }){
  const post = await import(`../../../../../blog/${params.slug}/index.md`)
  console.log(post.metadata)
  return {
    meta : { ...post.metadata },
    Content: post.default,
  }
}
