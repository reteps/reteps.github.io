import { fetchMarkdownPosts } from '$lib/utils/server'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return +new Date(b.meta.date) - +new Date(a.meta.date)
  })

  console.log(sortedPosts)

  return json(sortedPosts)
} 