<script lang="ts">
	import type { PageData } from './$types';
	import '/src/prism.css'; // for code highlighting

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog - {data.title}</title>
</svelte:head>

<div class="prose min-w-full p-3">
	<div class="first-letter:text-3xl text-2xl font-serif">{data.title}</div>
	<div>{data.date}</div>
	<div class="w-full bg-gray-400 h-[1px]" />
	<svelte:component this={data.content} />
</div>
