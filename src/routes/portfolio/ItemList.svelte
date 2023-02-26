<script lang="ts">
	import { page } from '$app/stores';
	import type { PortfolioItem, Work, Activity } from '$lib/types/portfolio';
	let activeMenu: 'work' | 'activity' = 'work';
	export let works: Work[] = [];
	export let activities: Activity[] = [];
	let items: PortfolioItem[] = works;
	$: items = activeMenu === 'work' ? works : activities;
	let activeItem = '';
	$: activeItem = $page.url.pathname.split('/')[2];
</script>

<div class="mb-1 grid h-11 w-full grid-cols-2">
	<div
		class="col-span-1 flex h-11 items-center justify-center border-b-2 hover:cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-900"
		class:border-orange-400={activeMenu === 'work'}
		on:mousedown={() => {
			activeMenu = 'work';
		}}
	>
		<div>Work</div>
	</div>
	<div
		class="col-span-1 flex h-11 items-center justify-center border-b-2 hover:cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-900"
		class:border-orange-400={activeMenu === 'activity'}
		on:mousedown={() => {
			activeMenu = 'activity';
		}}
	>
		<div>Activitiy</div>
	</div>
</div>
<div
	class="flex h-full max-h-full flex-col gap-1 divide-y divide-orange-400/50 overflow-scroll md:pr-3"
>
	{#each items as item}
		<a
			class="flex border-spacing-8 flex-col p-1 hover:cursor-pointer hover:bg-orange-200/20"
			class:bg-orange-200={item.path === activeItem}
			class:bg-opacity-20={item.path === activeItem}
			href={`/portfolio/${item.path}`}
		>
			<div class="flex items-center justify-between pt-2">
				<div class="text-xl md:text-2xl font-bold" class:text-orange-400={item.path === activeItem}>
					{item.meta.title}
				</div>
				<div class="bg-blue-100/50 px-1 dark:bg-blue-900/50">
					{#if item.meta.organisation}
						{item.meta.organisation}
					{/if}
				</div>
			</div>
			<p>{item.meta.summary}</p>
			<div class="flex items-center gap-1 text-sm">
				{#each item.meta.tags as tag}
					<span class="bg-zinc-100 px-1 dark:bg-zinc-800">{tag}</span>
					<div class="mx-1 h-1 w-1 rounded-full bg-zinc-400 last:hidden" />
				{/each}
			</div>
		</a>
	{/each}
</div>
