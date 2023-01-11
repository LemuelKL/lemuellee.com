<script>
	import Navbar from './Navbar.svelte';
	import './../app.css';
</script>

<Navbar />
<main><slot /></main>

<style>
	main {
		font-family: 'Times New Roman', Times, serif;
	}
</style>
