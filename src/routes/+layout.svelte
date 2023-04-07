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
	<main
		class="absolute top-10 h-[calc(100%-80px)] w-full overflow-hidden bg-polka-light bg-polka dark:bg-polka-dark sm:top-12 sm:h-[calc(100%-96px)]"
	>
		<slot  />
	</main>
	<Footer />
</div>
