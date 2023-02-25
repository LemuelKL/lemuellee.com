<script lang="ts">
	import './../app.css';
	import NavBar from './NavBar.svelte';
	import Footer from './Footer.svelte';

	import { darkMode } from './../stores';
</script>

<svelte:head>
	<meta name="theme-color" content={$darkMode ? '#18181B' : '#FFFFFF'} />
</svelte:head>

<div class="static h-auto w-screen overflow-hidden">
	<NavBar />
	<main class="absolute top-10 sm:top-12 h-[calc(100%-80px)] sm:h-[calc(100%-96px)] w-full overflow-scroll">
		<slot />
	</main>
	<Footer />
</div>
