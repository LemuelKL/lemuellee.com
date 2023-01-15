export const fetchMarkdownBlogs = async () => {
  const allBlogFiles = import.meta.glob('/src/routes/blog/*.svx')
  const iterableBlogFiles = Object.entries(allBlogFiles)
  
  const allBlogs = await Promise.all(
    iterableBlogFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const blogPath = path.slice(11, -4)

      return {
        meta: metadata,
        path: blogPath,
      }
    })
  )

  return allBlogs
}

export const fetchMarkdownProjects = async () => {
  const allProjectFiles = import.meta.glob('/src/routes/projects/*.svx')
  const iterableProjectFiles = Object.entries(allProjectFiles)
  
  const allProjects = await Promise.all(
    iterableProjectFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const projectPath = path.slice(11, -4)

      return {
        meta: metadata,
        path: projectPath,
      }
    })
  )

  return allProjects
}