import { fetchMarkdownPosts } from '$lib/utils/server'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  let allPosts = await fetchMarkdownPosts()
  const sortedPosts = allPosts.sort((a, b) => {
    const [dayA, monthA, yearA] = a.meta.date.split("-")
    const [dayB, monthB, yearB] = b.meta.date.split("-")
    return +new Date(yearB, monthB - 1, dayB) - +new Date(yearA, monthA - 1, dayA)
  })

  return json(sortedPosts)
} 