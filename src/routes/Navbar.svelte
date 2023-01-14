<script lang="ts">
	import { page } from '$app/stores';
	export let scrollY = 0;
	import { createEventDispatcher } from 'svelte';
	const items = [
		{ title: 'Home', href: '/' },
		{ title: 'Contact', href: '/contact' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Blog', href: '/blog' }
	];
	let mobileMenu = false;
	$: if (scrollY > 48) {
		mobileMenu = false;
	}
	const dispatch = createEventDispatcher();
	function handleMenuClick() {
		if (scrollY > 48) {
			dispatch('scrollToTop');
		}
		mobileMenu = !mobileMenu;
	}
</script>

<div
	class="h12 sticky top-0 z-50 bg-black text-white font-serif transition-all duration-300"
	class:bg-opacity-50={scrollY > 48}
>
	<div class="flex justify-center">
		<div class="max-w-5xl w-full flex justify-between">
			<!-- Icon & Title -->
			<div class="flex items-start gap-1 p-2 hover:cursor-default">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8 animate-pulse"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
					/>
				</svg>
				<p class="font-semibold text-2xl">LEMuel</p>
			</div>
			<!-- Desktop Menu -->
			<div class="hidden sm:flex items-center divide-x divide-gray-500">
				{#each items as item}
					<a
						href={item.href}
						class="p-2"
						class:text-gray-400={$page.url.pathname !== item.href}
						class:underline={$page.url.pathname === item.href}
					>
						{item.title}
					</a>
				{/each}
			</div>
			<!-- Mobile Menu -->
			<div class="sm:hidden flex flex-col items-end p-3 hover:cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 hover:cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					on:mousedown={handleMenuClick}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
		</div>
	</div>

	{#if mobileMenu}
		<div class="absolute top-12 right-1 z-49 flex flex-col divide-y-2 bg-black divide-gray-900">
			{#each items as item}
				<a
					href={item.href}
					class="pl-12 pr-2 py-1 text-right"
					class:text-gray-400={$page.url.pathname !== item.href}
					class:underline={$page.url.pathname === item.href}
				>
					{item.title}
				</a>
			{/each}
		</div>
	{/if}
</div>
