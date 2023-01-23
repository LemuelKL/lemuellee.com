<script lang="ts">
	import type { Work } from '$lib/types/portfolio';
	export let work: Work;

	import { AngleDownSolid, AngleUpSolid } from 'svelte-awesome-icons';

	let isExpanded = false;
	const toggleExpand = () => {
		isExpanded = !isExpanded;
	};

	import { fade, fly } from 'svelte/transition';
</script>

<div
	class="group flex w-full flex-col gap-1 p-2 hover:cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-900/20"
	on:mouseup={toggleExpand}
>
	<div class="items-top flex justify-between">
		<div class="text-2xl text-orange-700">{work.title}</div>
		{#if isExpanded}
			<AngleUpSolid />
		{:else}
			<AngleDownSolid class="hidden animate-pulse text-blue-700 group-hover:block" />
		{/if}
	</div>
	<div class="flex justify-between">
		<div class="flex flex-wrap items-center">
			{#each work.tags as tag}
				<div class="text-xs">{tag}</div>
				<div class="mx-2 h-1 w-1 rounded-full bg-zinc-400 last:hidden" />
			{/each}
		</div>
		<div class="hidden whitespace-nowrap text-xs sm:block">{work.date}</div>
	</div>
	{#if isExpanded}
		<ul
			class="flex list-disc flex-col gap-1 py-1 marker:text-orange-400"
			transition:fly={{ x: -100, duration: 300 }}
		>
			{#each work.description as desc}
				<li class="tracking-tight">{desc}</li>
			{/each}
		</ul>
		{#if work.links.length > 0}
			<div class="flex flex-col">
				{#each work.links as link, idx}
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						class="w-full bg-blue-100 text-right text-sm text-blue-900 hover:underline dark:bg-slate-900 dark:text-blue-200"
						in:fly={{ x: 200, duration: 200 * (2 * idx + 1) }}
						out:fly={{ x: 200, duration: 300 }}
					>
						<div>{link}</div>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>
