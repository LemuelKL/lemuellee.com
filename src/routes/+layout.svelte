<script lang="ts">
	import './../app.css';
	import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';
	import { page } from '$app/stores';
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
			const elem = document.getElementById('prism-style') as HTMLLinkElement;
			if (!elem) return;
			elem.href = '/prism/themes/prism-one-' + ($darkMode ? 'dark' : 'light') + '.css';
			Prism.highlightAll();
		});
	});
</script>

<div class="flex h-screen w-screen flex-col">
	<header class="flex h-14 items-center gap-2 border-b md:px-8 px-2 w-full">
		<div class="flex flex-col items-center md:flex-row md:gap-2">
			<a
				class="text-xl font-extrabold transition-all hover:-translate-y-1 hover:text-orange-900"
				href="/"
			>
				Lemuel Lee
			</a>
			<div class="hidden text-sm md:block">/</div>
			<div class="flex gap-1 text-sm">
				<a
					class="text-green-800"
					href="https://www.hku.hk"
					target="_blank"
					rel="noreferrer"
				>
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
		<nav class="flex justify-end gap-4 text-xs font-semibold">
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
	<main class="min-h-[calc(100vh-120px)] grow-0 overflow-scroll">
		<slot />
	</main>
	<footer class="flex h-16 items-center gap-4 border-t md:px-8 px-2 text-xs md:gap-8">
		<label class="relative inline-flex cursor-pointer items-center">
			<input type="checkbox" bind:checked={$darkMode} class="peer sr-only" />
			<div
				class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"
			/>
			<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
				{$darkMode ? 'Atra' : 'Lux'}
			</span>
		</label>
		<div class="mx-auto" />
		<div class="hidden sm:flex flex-col items-center">
			<div class="font-bold">Now at</div>
			<div>Egham, UK</div>
		</div>
		<div class="hidden sm:flex flex-col items-center">
			<div class="font-bold">Call</div>
			<div>+852 6238 2237</div>
		</div>
		<div class="hidden sm:flex flex-col items-center">
			<div class="font-bold">Write</div>
			<div>lemuellee.kl@gmail.com</div>
		</div>
		<div class="sm:hidden flex flex-col">
			<div>+852 6238 2237</div>
			<div>lemuellee.kl@gmail.com</div>
		</div>
		<div class="flex items-center gap-2">
			<a href="https://www.github.com/LemuelKL" target="_blank" rel="noreferrer">
				<GithubBrand
					class="transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-gray-700"
				/>
			</a>
			<a href="https://www.linkedin.com/in/lemuelkl/" target="_blank" rel="noreferrer">
				<LinkedinBrand
					class="transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-blue-700"
				/>
			</a>
		</div>
	</footer>
</div>
