import { fetchMarkdownBlogs } from '$lib/utils/index'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allBlogs = await fetchMarkdownBlogs()

  const sortedBlogs = allBlogs.sort((a, b) => {
    return b.meta.date - a.meta.date
  })

  console.log(sortedBlogs)

  return json(sortedBlogs)
}