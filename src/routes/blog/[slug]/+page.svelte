<script lang="ts">
	import ContentPage from '$lib/ContentPage.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog - {data.title}</title>
</svelte:head>

<ContentPage {data} />
