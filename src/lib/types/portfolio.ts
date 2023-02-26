export interface PortfolioItem {
	meta: {
		title: string;
		type: string;
		organisation?: string;
		summary: string;
		tags: string[];
		date: string;
	};
	path: string;
}

export type Work = PortfolioItem
export type Activity = PortfolioItem
