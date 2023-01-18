<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;

	function gotoBlog(path: string) {
		goto(path);
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul class="justify-self-start w-full p-3 flex flex-col gap-3">
	{#each data.blogs as blog}
		<li
			class="flex flex-col outline p-2 bg-gray-200 dark:bg-gray-700 hover:bg-yellow-400 dark:hover:bg-yellow-700 hover:cursor-pointer"
			on:mousedown={() => gotoBlog(blog.path)}
		>
			<p class="text-3xl">
				{blog.meta.title}
			</p>
			Published {blog.meta.date}
		</li>
	{/each}
</ul>
