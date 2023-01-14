<script lang="ts">
	export let scrollY = 0;
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Fingerprint from './Fingerprint.svelte';
	import { BarsSolid, ChevronDownSolid } from 'svelte-awesome-icons';
	import NavMenu from './NavMenu.svelte';
	import type { NavItem } from '$lib/types/navbar';
	const navItems: NavItem[] = [
		{ label: 'Home', route: '/' },
		{ label: 'Contact', route: '/contact' },
		{ label: 'Projects', route: '/projects' },
		{ label: 'Blog', route: '/blog' }
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
				<Fingerprint />
				<p class="font-semibold text-2xl">LEMuel</p>
			</div>
			<!-- Desktop Menu -->
			<div class="hidden sm:flex items-center gap-2 pr-3">
				<NavMenu items={navItems} />
			</div>
			<!-- Mobile Menu Button-->
			<div class="sm:hidden p-3 hover:cursor-pointer" on:mousedown={handleMenuClick}>
				{#if mobileMenu}
					<ChevronDownSolid />
				{:else}
					<BarsSolid />
				{/if}
			</div>
		</div>
	</div>
	<!-- Mobile Menu -->
	{#if mobileMenu}
		<div
			class="absolute top-12 right-1 z-49 flex flex-col bg-black p-2 px-4 gap-2"
			in:fly={{ y: -20, duration: 200 }}
			out:fade
		>
			<NavMenu items={navItems} />
		</div>
	{/if}
</div>
