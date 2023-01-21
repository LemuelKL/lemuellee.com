<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="flex w-full flex-col gap-3 justify-self-start p-3">
	{#each data.posts as post}
		<a
			class="flex gap-4 rounded-sm bg-gray-100 p-2 ring-1 hover:cursor-pointer hover:bg-orange-100 dark:bg-gray-700 dark:hover:bg-orange-900"
			href={post.path}
		>
			<img
				class="aspect-square h-36 w-36 rounded-xl object-cover md:h-52 md:w-52"
				src={post.meta.cover ?? '/wallpaper/121134.jpg'}
				alt=""
			/>
			<div class="flex flex-col md:gap-1 md:py-2 lg:gap-2 lg:py-4">
				<div class="text-2xl md:text-4xl">
					{post.meta.title}
				</div>
				<div class="text">{post.meta.date}</div>
				<div class="text">{post.meta.summary ?? ''}</div>
			</div>
		</a>
	{/each}
</div>
