import type { PortfolioItem } from '$lib/types/portfolio';
import { fetchPortfolioItems } from '$lib/utils/index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allItems = await fetchPortfolioItems();

	const sortedItems = allItems.sort((a: PortfolioItem, b: PortfolioItem) => {
		return b.meta.date > a.meta.date ? 1 : -1;
	});


	return json(sortedItems);
};

export const prerender = true;