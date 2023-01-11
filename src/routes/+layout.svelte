<script>
	import Navbar from './Navbar.svelte';
	import './../app.css';
</script>

<Navbar />
<main class="bg-gray-200"><slot /></main>

<style>
	main {
		background-image: url('texture.svg');
		background-repeat: repeat;
		background-position: center;
		background-size: 2;
	}
</style>
