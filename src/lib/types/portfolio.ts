export interface PortfolioItem {
	id: string;
	title: string;
	organisation?: string;
	tags: string[];
	summary: string;
	start_date?: string;
	end_date?: string;
}
