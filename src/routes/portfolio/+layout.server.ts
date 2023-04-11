import type { Work, Activity, PortfolioItem } from '$lib/types/portfolio';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/portfolio-items`);
	const items: PortfolioItem[] = await response.json();
	const works: Work[] = items.filter((item) => item.meta.type === 'work');
	const activities: Activity[] = items.filter((item) => item.meta.type === 'activity');

	return {
		works,
		activities
	};
}) satisfies LayoutServerLoad;
