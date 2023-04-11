<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import defaultCover from '$lib/assets/ryan-shumway--n5F3fH0lIY-unsplash.webp';
	import { humanDate } from '$lib/utils';

	const firstPostMeta = data.posts[0].meta;
</script>

<svelte:head>
	<title>Blog - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content={`Latest post on ${humanDate(firstPostMeta.date)}: ${firstPostMeta.title} - ${
			firstPostMeta.summary
		}`}
	/>
</svelte:head>

<div class="flex w-full flex-col gap-3 justify-self-start p-3">
	{#each data.posts as post}
		<a
			class="flex gap-4 rounded-sm bg-gray-100 p-2 ring-1 hover:cursor-pointer hover:bg-orange-100 dark:bg-zinc-700 dark:hover:bg-gray-900"
			href={post.path}
		>
			<img
				class="aspect-square h-16 w-16 rounded-sm object-cover md:h-32 md:w-32"
				src={post.meta.cover ?? defaultCover}
				alt=""
			/>
			<div class="flex flex-col md:gap-2">
				<div class="flex flex-col gap-1">
					<div class="text-xl font-bold md:text-2xl">{post.meta.title}</div>
				</div>
				<div class="text-sm text-gray-500 dark:text-gray-300 md:text-base">
					{post.meta.summary}
				</div>
			</div>
		</a>
	{/each}
</div>
