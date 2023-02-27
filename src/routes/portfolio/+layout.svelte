<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import ItemList from './ItemList.svelte';

	const works = data.works;
	const activities = data.activities;

	let activeItem = '';
	$: activeItem = $page.url.pathname.split('/')[2];
</script>

<svelte:head>
	<title>Portfolio - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="DSL | Functional Programming | Algo Trading | Machine Learning | Self-driving | Fullstack | Linux | Database | Operating System"
	/>
</svelte:head>

<div class="mx-auto h-full max-w-7xl overflow-scroll bg-white py-2 px-2 dark:bg-zinc-900">
	<div class="lg:hidden">
		{#if activeItem === undefined}
			<ItemList {works} {activities} />
		{:else}
			<slot />
		{/if}
	</div>
	<div class="hidden h-full grid-cols-12 gap-1 lg:grid">
		<div class="col-span-5 flex h-full max-h-full flex-col overflow-scroll">
			<ItemList {works} {activities} />
		</div>
		<div class="col-span-7 overflow-scroll">
			<slot />
		</div>
	</div>
</div>
