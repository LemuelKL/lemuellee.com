<script>
	import { page } from '$app/stores';
	export let routes = [
		{
			label: 'ABOUT',
			href: '/'
		},
		{
			label: 'PORTFOLIO',
			href: '/portfolio'
		},
		{
			label: 'BLOG',
			href: '/blog'
		}
	];

	$: baseRoute = $page.url.pathname.split('/')[1];
</script>

<header
	class="absolute flex h-10 sm:h-12 w-full items-center gap-2 border-b bg-white px-4 dark:bg-zinc-900 sm:px-8"
>
	<img src="/favicon.png" class="hidden h-8 w-8 md:block" alt="" />
	<a class="ml-1 text-xl font-extrabold hover:text-orange-900" href="/">LemuelKL</a>
	<div class="mx-auto" />
	<nav class="flex justify-end gap-4 text-xs font-extrabold" data-sveltekit-preload-code="eager">
		{#each routes as route}
			<a
				class="py-4 transition-all hover:-translate-y-1 hover:text-orange-500"
				href={route.href}
				class:text-orange-500={route.href === '/' + baseRoute}
			>
				{route.label}
			</a>
		{/each}
	</nav>
</header>
