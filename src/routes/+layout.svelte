<script lang="ts">
	import './../app.css';
	import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';
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

<div class="h-screen bg-zinc-200 flex flex-col">
	<header class="bg-white h-14 px-8 flex items-center gap-2">
		<!-- <div class="w-3 h-3 rounded-sm bg-orange-500" /> -->
		<div class="flex items-center md:gap-2 flex-col md:flex-row">
			<a
				class="font-extrabold text-xl hover:text-orange-900 transition-all hover:-translate-y-1"
				href="/"
			>
				Lemuel Lee
			</a>
			<div class="text-sm hidden md:block">/</div>
			<div class="text-sm">HKU & RHUL CS</div>
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
	<main class="grow max-h-[calc(100vh-120px)]">
		<slot />
	</main>
	<footer class="bg-white h-16 px-8 flex items-center gap-8 text-xs">
		<div class="hidden md:flex flex-col justify-end font-semibold">
			<div>© 2023 Lemuel Lee</div>
			<div>
				with <a class="text-orange-700">Svelte</a> &
				<a class="text-cyan-700">Tailwind</a>
			</div>
		</div>
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
