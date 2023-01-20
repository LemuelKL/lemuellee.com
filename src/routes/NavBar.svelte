<script>
	import { page } from '$app/stores';

	let routes = [
		{
			label: 'ABOUT',
			href: '/'
		},
		{
			label: 'WORKS',
			href: '/works'
		},
		{
			label: 'RESUME',
			href: '/resume'
		},
		{
			label: 'BLOG',
			href: '/blog'
		}
	];
</script>

<header
	class="absolute flex h-16 w-full items-center gap-2 border-b bg-white px-4 dark:bg-gray-900 sm:px-8"
>
	<div class="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
		<a
			class="text-xl font-extrabold transition-all hover:-translate-y-1 hover:text-orange-900"
			href="/"
		>
			Lemuel Lee
		</a>
		<div class="hidden text-sm sm:block">/</div>
		<div class="flex gap-1 text-sm">
			<a class="text-green-800" href="https://www.hku.hk" target="_blank" rel="noreferrer">
				HKU
			</a>
			<div class="text-gray-300 dark:text-gray-800">&</div>
			<a
				class="text-orange-800"
				href="https://www.royalholloway.ac.uk/"
				target="_blank"
				rel="noreferrer"
			>
				RHUL
			</a>CompSc
		</div>
	</div>
	<div class="mx-auto" />
	<nav class="flex justify-end gap-4 text-xs font-extrabold">
		{#each routes as route}
			<a
				class="py-4 transition-all hover:-translate-y-1 hover:text-orange-500"
				href={route.href}
				class:text-orange-500={route.href === $page.url.pathname}
			>
				{route.label}
			</a>
		{/each}
	</nav>
</header>
