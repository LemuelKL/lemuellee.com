<script>
	import Navbar from './Navbar.svelte';
	import './../app.css';
</script>

<Navbar/>
<main class="relative h-[calc(100vh-48px)]"><slot /></main>

<style>
	main {
		font-family: 'Times New Roman', Times, serif;
	}
</style>
