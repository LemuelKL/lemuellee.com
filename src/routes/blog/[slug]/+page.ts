import type { PageLoad } from './$types';

export const load = (async({ params }) => {
  const post = await import(`../${params.slug}.svx`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
  }
}) satisfies PageLoad;
