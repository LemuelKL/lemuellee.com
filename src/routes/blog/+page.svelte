<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;

	function gotoPost(path: string) {
		goto(path);
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul class="justify-self-start w-full p-3">
	{#each data.posts as post}
		<li
			class="flex flex-col outline p-2 bg-gray-200 hover:bg-yellow-400 hover:cursor-pointer"
			on:mousedown={gotoPost(post.path)}
		>
			<p class="text-3xl">
				{post.meta.title}
			</p>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
