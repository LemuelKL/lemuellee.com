import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    try {
        const projects = await import(`../${params.slug}.svx`)
        const { title, date } = projects.metadata
        const content = projects.default
        return {
            content,
            title,
            date,
        }
    }
    catch {
        return {
            contet: null,
            title: 'Post Not Found',
            date: '',
        }
    }
}) satisfies PageLoad;
