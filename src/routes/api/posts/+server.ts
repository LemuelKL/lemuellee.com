import { fetchMarkdownPosts } from '$lib/utils/index'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return b.meta.date - a.meta.date
  })

  return json(sortedPosts)
}