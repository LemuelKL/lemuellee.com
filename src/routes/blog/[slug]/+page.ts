import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const post = await import(`../${params.slug}.svx`);
		const { title, date } = post.metadata;
		const content = post.default;
		return {
			content,
			title,
			date
		};
	} catch {
		return {
			contet: null,
			title: 'Post Not Found',
			date: ''
		};
	}
}) satisfies PageLoad;
