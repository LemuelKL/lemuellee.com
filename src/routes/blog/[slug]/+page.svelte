<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/plugins/line-numbers/prism-line-numbers';
	import 'prismjs/plugins/line-highlight/prism-line-highlight';
	import 'prismjs/plugins/toolbar/prism-toolbar';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
	import 'prismjs/components/prism-clike';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-cpp';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-python';
	import 'prismjs/components/prism-haskell';

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary ?? "Lemuel LEE Kwok Lam's blog."} />
</svelte:head>

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

<style>
	@import '$lib/assets/prism/prism-line-numbers.css';
	@import '$lib/assets/prism/prism-toolbar.css';
	@import '$lib/assets/prism/prism-one-dark.css';
	@import url('https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css');
</style>
