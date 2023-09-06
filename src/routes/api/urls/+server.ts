import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json([{
		url: 'https://docs.google.com/presentation/d/1zhRWaLX3HTlhFy8c-EF-BM1atfgwVY69d5GGxlZ8P70/edit?usp=sharing',
		description: 'CAES9542 FYP presentation',
	}]);
};

export const prerender = true;
