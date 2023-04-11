export const fetchMarkdownBlogs = async () => {
	const allBlogFiles = import.meta.glob('/src/routes/blog/*.svx');
	const iterableBlogFiles = Object.entries(allBlogFiles);
	const allBlogs = await Promise.all(
		iterableBlogFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const blogPath = path.slice(11, -4);

			return {
				meta: metadata,
				path: blogPath
			};
		})
	);

	return allBlogs;
};

export const humanDate = (date: string) => {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return new Date(date).toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);
};

export const fetchPortfolioItems = async () => {
	const allPortfolioFiles = import.meta.glob('/src/routes/portfolio/*.svx');
	const iterablePortfolioFiles = Object.entries(allPortfolioFiles);
	const allPortfolioItems = await Promise.all(
		iterablePortfolioFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const portfolioPath = path.split('.')[0].split('/').slice(-1).toString();

			return {
				meta: metadata,
				path: portfolioPath
			};
		})
	);

	return allPortfolioItems;
};
