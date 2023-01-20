<script lang="ts">
	import './../app.css';
	import NavBar from './NavBar.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="static h-screen w-screen">
	<NavBar />
	<main class="absolute top-16 h-[calc(100vh-128px)] w-full overflow-scroll">
		<slot />
	</main>
	<Footer />
</div>
