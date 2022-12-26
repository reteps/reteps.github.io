import { basename, dirname } from 'path'

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/blog/**/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } : any = await resolver()
      const postPath = dirname(path)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}