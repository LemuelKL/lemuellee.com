<script lang="ts">
	import './../app.css';
	import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';
	import { page } from '$app/stores';
	import DarkModeToggle from './DarkModeToggle.svelte';
	import { darkMode } from './../stores';
	import { onMount } from 'svelte';

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

	onMount(() => {
		if (localStorage.getItem('darkMode') === 'true') darkMode.set(true);
		darkMode.subscribe((value) => {
			if (value) document.documentElement.classList.add('dark');
			else document.documentElement.classList.remove('dark');
			document.getElementById('prism-style').href =
				'/prism/themes/prism-one-' + ($darkMode ? 'dark' : 'light') + '.css';
			Prism.highlightAll();
		});
	});
</script>

<div class="h-screen flex flex-col">
	<header class="h-14 px-8 flex items-center gap-2 border-b">
		<!-- <div class="w-3 h-3 rounded-sm bg-orange-500" /> -->
		<div class="flex items-center md:gap-2 flex-col md:flex-row">
			<a
				class="font-extrabold text-xl hover:text-orange-900 transition-all hover:-translate-y-1"
				href="/"
			>
				Lemuel Lee
			</a>
			<div class="text-sm hidden md:block">/</div>
			<div class="text-sm">
				<a class="text-green-800">HKU</a> <a class="text-gray-300 dark:text-gray-800">&</a>
				<a class="text-orange-800">RHUL</a> CompSc
			</div>
		</div>
		<div class="mx-auto" />
		<nav class="text-xs font-semibold flex justify-end gap-4">
			{#each routes as route}
				<a
					class="hover:text-orange-500 transition-all hover:-translate-y-1 py-4"
					href={route.href}
					class:text-orange-500={route.href === $page.url.pathname}
				>
					{route.label}
				</a>
			{/each}
		</nav>
	</header>
	<main class="grow-0 min-h-[calc(100vh-120px)] overflow-scroll">
		<slot />
	</main>
	<footer class="h-16 px-8 flex items-center md:gap-8 gap-4 text-xs border-t">
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" bind:checked={$darkMode} class="sr-only peer" />
			<div
				class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-800"
			/>
			<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
				{$darkMode ? 'Atra' : 'Lux'}
			</span>
		</label>
		<div class="mx-auto" />
		<div class="flex flex-col items-center">
			<div class="font-bold">Now at</div>
			<div>Egham, UK</div>
		</div>
		<div class="flex flex-col items-center">
			<div class="font-bold">Call</div>
			<div>+852 6238 2237</div>
		</div>
		<div class="flex flex-col items-center">
			<div class="font-bold">Write</div>
			<div>lemuellee.kl@gmail.com</div>
		</div>
		<div class="flex items-center gap-2">
			<a href="https://www.github.com/LemuelKL">
				<GithubBrand
					class="hover:cursor-pointer hover:text-gray-700 transition-all hover:-translate-y-1"
				/>
			</a>
			<a href="https://www.linkedin.com/in/lemuelkl/">
				<LinkedinBrand
					class="hover:cursor-pointer hover:text-blue-700 transition-all hover:-translate-y-1"
				/>
			</a>
		</div>
	</footer>
</div>
