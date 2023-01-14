<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/types/navbar';
	export let items: NavItem[] = [];

	$: baseRoute =  '/' + $page.url.pathname.split('/')[1]
</script>

{#each items as item}
	<a
		href={item.route}
		class:text-gray-400={baseRoute !== item.route}
		class:underline={baseRoute === item.route}
	>
		{item.label}
	</a>
{/each}
