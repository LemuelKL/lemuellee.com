<script lang="ts">
	import { darkMode } from './../stores.ts';
	import NavBar from './NavBar.svelte';
	import Banner from './Banner.svelte';
	import './../app.css';

	let scrollY = 0;
	function scrollToTop() {
		scrollY = 0;
	}
</script>

<div class:dark={$darkMode}>
	<NavBar {scrollY} on:scrollToTop={scrollToTop} />
	<div class="h-48 sticky -top-36"><Banner /></div>
	<main
		class="mx-auto max-w-5xl flex justify-center h-full min-h-[calc(100vh-3rem)]
	transition-colors
	bg-gray-50
	dark:bg-gray-900 dark:text-gray-200"
	>
		<slot />
	</main>
</div>
<svelte:window bind:scrollY />

<style>
	main {
		font-family: 'Times New Roman', Times, serif;
	}
</style>
