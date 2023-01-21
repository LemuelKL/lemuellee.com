<script>
	import { fly } from 'svelte/transition';
	export let url = '';
</script>

<div class="transition-outer absolute top-16 h-[calc(100vh-128px)] w-full overflow-scroll">
	{#key url}
		<div
			class="transition-inner"
			in:fly={{ y: -5, duration: 300, delay: 300 }}
			out:fly={{ y: 5, duration: 300 }}
		>
			<slot />
		</div>
	{/key}
</div>

<style>
	.transition-outer {
		display: grid;
		grid-template: 1fr 1fr;
	}
	.transition-inner {
		grid-row: 1;
		grid-column: 1;
	}
</style>
