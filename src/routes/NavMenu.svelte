<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/types/navbar';
	export let items: NavItem[] = [];
</script>

{#each items as item}
	<a
		href={item.route}
		class:text-gray-400={$page.url.pathname !== item.route}
		class:underline={$page.url.pathname === item.route}
	>
		{item.label}
	</a>
{/each}
