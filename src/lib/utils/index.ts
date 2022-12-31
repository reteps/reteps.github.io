// These are intended to be server-side methods, so we can use node modules
// Access to these methods should be wrapped in a api route, like src/routes/api/posts.ts
import { dirname } from 'path'

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

export const fetchTimeMachineYears = () => {
  const snapshots = import.meta.glob("../../../static/20[0-9][0-9]/index.html");
  const years = Object.keys(snapshots).map((path) => path.match(/20[0-9][0-9]/)![0])
  // sort years
  years.sort((a, b) => parseInt(a) - parseInt(b))
  return years
}