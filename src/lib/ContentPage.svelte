<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div
	class="
		prose prose-slate
		min-w-full p-3
		prose-pre:outline
		dark:prose-invert"
>
	<div class="font-serif text-2xl first-letter:text-3xl">{data.title}</div>
	<div>{data.date}</div>
	<div class="h-[1px] w-full bg-gray-400" />
	<svelte:component this={data.content} />
</div>
