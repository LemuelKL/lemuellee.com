<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const works = data.works;
	const activities = data.activities;

	let itemType: 'work' | 'activity' = 'work';
	let items: typeof works | typeof activities;
	$: items = itemType === 'work' ? works : activities;
	$: activeItem = $page.url.pathname.split('/')[3];
</script>

<svelte:head>
	<title>Portfolio - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="DSL | Functional Programming | Algo Trading | Machine Learning | Self-driving | Fullstack | Linux | Database | Operating System"
	/>
</svelte:head>

<div class="mx-auto h-full max-w-7xl py-2 px-2">
	<div class="grid h-full grid-cols-12 gap-1">
		<div class="col-span-4 flex h-full max-h-full flex-col overflow-scroll">
			<div class="mb-1 grid h-11 w-full grid-cols-2">
				<div
					class="col-span-1 flex h-11 items-center justify-center border-b-2 hover:cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-900"
					class:border-orange-400={itemType === 'work'}
					on:mousedown={() => {
						itemType = 'work';
					}}
				>
					<div>Work</div>
				</div>
				<div
					class="col-span-1 flex h-11 items-center justify-center border-b-2 hover:cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-900"
					class:border-orange-400={itemType === 'activity'}
					on:mousedown={() => {
						itemType = 'activity';
					}}
				>
					<div>Activitiy</div>
				</div>
			</div>
			<div
				class="flex h-full max-h-full flex-col gap-1 divide-y divide-orange-400/50 overflow-scroll pr-3"
			>
				{#each items as item}
					<a
						class="flex border-spacing-8 flex-col p-1 pr-1 hover:cursor-pointer hover:bg-orange-200/20"
						class:bg-orange-200={item.path === activeItem}
						class:bg-opacity-20={item.path === activeItem}
						href={`/portfolio/${item.path}`}
					>
						<div class="flex items-center justify-between pt-2">
							<div
								class="text-2xl font-bold"
								class:text-orange-400={item.path === activeItem}
							>
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
		</div>
		<div class="col-span-8 overflow-scroll">
			<slot />
		</div>
	</div>
</div>
