import type { PortfolioItem } from '$lib/types/portfolio';
import { fetchPortfolioItems } from '$lib/utils/index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allItems = await fetchPortfolioItems();

	const sortedByYear = allItems.sort((a: PortfolioItem, b: PortfolioItem) => {
		return b.meta.month - a.meta.month;
	});

	const sorted = sortedByYear.sort((a: PortfolioItem, b: PortfolioItem) => {
		return b.meta.year - a.meta.year;
	});

	return json(sorted);
};

export const prerender = true;