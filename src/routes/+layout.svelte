<script lang="ts">
	import './../app.css';
	import PageTransition from './PageTransition.svelte';
	import NavBar from './NavBar.svelte';
	import Footer from './Footer.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<div class="static h-screen w-screen">
	<NavBar />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
