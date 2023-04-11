<script>
	import { onMount } from 'svelte';
	import { darkMode } from './../stores';
	function toggleDarkMode() {
		darkMode.set(!$darkMode);
		document.documentElement.classList.toggle('dark');
	}
	import { BarsSolid } from 'svelte-awesome-icons';
	import { page } from '$app/stores';
	export let routes = [
		{
			label: 'ABOUT',
			href: '/'
		},
		{
			label: 'RESUME',
			href: '/resume'
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

	onMount(() => {
		if (localStorage.getItem('darkMode') === 'true') darkMode.set(true);
		darkMode.subscribe((value) => {
			if (value) document.documentElement.classList.add('dark');
			else document.documentElement.classList.remove('dark');
		});
	});

	let showMenu = false;
</script>

<header
	class="absolute flex h-10 w-full items-center justify-between gap-2 border-b bg-white px-4 dark:bg-zinc-900 sm:h-12 sm:px-8 md:justify-start"
>
	<img
		src="/favicon.png"
		class="h-8 w-8 hover:cursor-pointer"
		alt=""
		on:mousedown={toggleDarkMode}
	/>
	<div class="ml-1 text-xl font-extrabold">LemuelKL</div>
	<div class="mx-auto hidden md:block" />
	<div on:mousedown={() => (showMenu = !showMenu)}>
		<BarsSolid class="h-6 w-6 hover:cursor-pointer md:hidden" />
	</div>

	<nav
		class="hidden justify-end gap-4 text-xs font-extrabold md:flex"
		data-sveltekit-preload-code="eager"
	>
		{#each routes as route}
			<a
				class="py-4 hover:text-orange-500"
				href={route.href}
				class:text-orange-500={route.href === '/' + baseRoute}
			>
				{route.label}
			</a>
		{/each}
	</nav>
</header>
<!-- Mobile Menu -->
<nav
	class="absolute right-0 top-12 z-10 flex flex-col gap-1 p-4 md:hidden"
	data-sveltekit-preload-code="eager"
	class:hidden={!showMenu}
>
	{#each routes as route}
		<a
			class="bg-zinc-100 py-2 pl-8 pr-4 text-right text-2xl font-bold hover:text-orange-500 dark:bg-zinc-700"
			href={route.href}
			class:text-orange-500={route.href === '/' + baseRoute}
			on:mouseup={() => (showMenu = !showMenu)}
		>
			{route.label}
		</a>
	{/each}
</nav>
