import { fetchMarkdownProjects } from '$lib/utils/index'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allProjects = await fetchMarkdownProjects()
  const filteredProjects = allProjects.filter((project) => {
    return project.meta.published
  })
  const sortedProjects = filteredProjects.sort((a, b) => {
    return b.meta.date - a.meta.date
  })

  return json(sortedProjects)
}