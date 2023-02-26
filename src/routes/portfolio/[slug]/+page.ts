import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const post = await import(`../${params.slug}.svx`);
		const { title, date, summary } = post.metadata;
		const content = post.default;
		return {
			title,
			date,
			summary,
			content
		};
	} catch {
		return {
			title: 'Post Not Found',
			date: '',
			summary: '',
			content: null
		};
	}
}) satisfies PageLoad;
