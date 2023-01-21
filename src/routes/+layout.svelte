<script lang="ts">
	import './../app.css';
	import { fade, fly } from 'svelte/transition';
	import NavBar from './NavBar.svelte';
	import Footer from './Footer.svelte';
	import { page } from '$app/stores';
	$: baseRoute = $page.url.pathname.split('/')[1];
</script>

<div class="static h-screen w-screen">
	<NavBar />
	{#key baseRoute}
		<main
			class="absolute top-16 h-[calc(100vh-128px)] w-full overflow-scroll"
			transition:fly={{ y: 200, duration: 2000 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>

