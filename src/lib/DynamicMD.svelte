<script lang="ts">
	import { compile as svelteCompile } from 'svelte/compiler';
	import { compile as mdsvexCompile } from 'mdsvex/dist/browser-umd.js';
	import { onMount } from 'svelte';

	onMount(async () => {
		await craft();
	});

	let disp: HTMLDivElement;
	export let mdUrl = '/demo.md';

	const craft = async () => {
		const response = await fetch(mdUrl);
		const srcCode = await response.text();

		const svelteCode = await mdsvexCompile(srcCode);
		const pureJs = svelteCompile(svelteCode.code, { accessors: true });
		let compiled = pureJs.js.code;
		compiled = compiled.replace(
			'svelte/internal',
			'https://unpkg.com/svelte@3.55.1/internal/index.mjs'
		);

		const blob = new Blob([compiled], { type: 'text/javascript' });
		const url = URL.createObjectURL(blob);
		const module = await import(/* @vite-ignore */ url);

		const componentClass = module.default;
		new componentClass({ target: disp });

		Prism.highlightAll();
	};

	const loadNewMd = () => {
		disp.innerHTML = '';
		craft();
	};
	const resetMd = () => {
		mdUrl = '/demo.md';
		disp.innerHTML = '';
		craft();
	};
</script>

<div class="prose" bind:this={disp} />
