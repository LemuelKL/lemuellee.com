<script lang="ts">
	import NavBar from './NavBar.svelte';
	import Banner from './Banner.svelte';
	import './../app.css';

	let scrollY = 0;
	function scrollToTop() {
		scrollY = 0;
	}
</script>

<NavBar {scrollY} on:scrollToTop={scrollToTop} />
<div class="h-48 sticky -top-36"><Banner /></div>
<main class="mx-auto max-w-5xl flex justify-center h-full min-h-[calc(100vh-3rem)]">
	<slot />
</main>
<svelte:window bind:scrollY />
