<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import defaultCover from '$lib/assets/ryan-shumway--n5F3fH0lIY-unsplash.jpg';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="flex w-full flex-col gap-3 justify-self-start p-3">
	{#each data.posts as post}
		<a
			class="flex gap-4 rounded-sm bg-gray-100 p-2 ring-1 hover:cursor-pointer hover:bg-orange-100 dark:bg-zinc-700 dark:hover:bg-gray-900"
			href={post.path}
		>
			<img
				class="aspect-square h-32 w-32 rounded-sm object-cover md:h-48 md:w-48"
				src={post.meta.cover ?? defaultCover}
				alt=""
			/>
			<div class="flex flex-col md:gap-1 lg:gap-2">
				<div class="text-2xl md:text-3xl">
					{post.meta.title}
				</div>
				<div class="text">{post.meta.date}</div>
				<div class="text">{post.meta.summary ?? ''}</div>
			</div>
		</a>
	{/each}
</div>
