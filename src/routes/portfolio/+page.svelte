<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	if (browser) goto('/portfolio/work');
</script>

<svelte:head>
	<title>Portfolio - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="DSL | Functional Programming | Algo Trading | Machine Learning | Self-driving | Fullstack | Linux | Database | Operating System"
	/>
</svelte:head>
