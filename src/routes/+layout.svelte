<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Banner from './Banner.svelte';
	import './../app.css';

	let scrollY = 0;

	function scrollToTop() {
		scrollY = 0;
	}
</script>

<Navbar {scrollY} on:scrollToTop={scrollToTop} />
<div class="h-48 sticky -top-36"><Banner /></div>
<main><slot /></main>
<svelte:window bind:scrollY />

<style>
	main {
		font-family: 'Times New Roman', Times, serif;
	}
</style>
