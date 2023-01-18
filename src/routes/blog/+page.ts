import type { Post } from '$lib/types/blog';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const posts: Post[] = await response.json();

	return {
		posts
	};
}) satisfies PageLoad;
