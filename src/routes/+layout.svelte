<script lang="ts">
	import './../app.css';
	import PageTransition from './PageTransition.svelte';
	import NavBar from './NavBar.svelte';
	import Footer from './Footer.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import { darkMode } from './../stores';
</script>

<svelte:head>
	<meta name="theme-color" content={$darkMode ? '#18181B' : '#FFFFFF'} />
</svelte:head>

<div class="static h-screen w-screen overflow-hidden">
	<NavBar />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
