export const load = async ({ fetch } : { fetch: any }) => {
  const response = await fetch(`/api/posts`)
  const posts = await response.json()

  return {
    posts
  }
}