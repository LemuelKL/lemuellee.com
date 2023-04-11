import type { RequestHandler } from './$types';
import { fetchMarkdownBlogs, fetchPortfolioItems } from '$lib/utils';
import type { Post } from '$lib/types/blog';
import type { PortfolioItem } from '$lib/types/portfolio';

const website = 'https://lemuellee.com';

export const GET = (async () => {
	const posts = await fetchMarkdownBlogs();
	const portfolioItems = await fetchPortfolioItems();
	const pages = ['/portfolio', '/blog'];
	return new Response(sitemap(portfolioItems, posts, pages));
}) satisfies RequestHandler;

export const prerender = true;

const sitemap = (
	portfolioItems: PortfolioItem[],
	posts: Post[],
	pages: string[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${website}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
  ${posts
		.map(
			(post) =>
				`
  <url>
    <loc>${website}${post.path}</loc>
    <changefreq>daily</changefreq>
    <lastmod>${post.meta.date}</lastmod>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
   ${portfolioItems
		.map(
			(item) =>
				`
  <url>
    <loc>${website}/portfolio/${item.path}</loc>
    <changefreq>daily</changefreq>
    <lastmod>${item.meta.date}</lastmod>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
