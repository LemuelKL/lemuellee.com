export interface PortfolioItem {
	meta: {
		title: string;
		type: string;
		organisation?: string;
		tags: string[];
		year: number;
		month: number;
		summary: string;
	};
	path: string;
}

export type Work = PortfolioItem
export type Activity = PortfolioItem
