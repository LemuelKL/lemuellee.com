import type { Post } from '$lib/types/blog';
import { fetchMarkdownBlogs } from '$lib/utils/index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownBlogs();

	const sortedPosts = allPosts.sort((a: Post, b: Post) => {
		return b.meta.date > a.meta.date ? 1 : -1;
	});

	return json(sortedPosts);
};
