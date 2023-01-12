<script lang="ts">
	import { goto } from '$app/navigation';

	export let title = '';
	export let tags: string[] = [];
	export let description = '';
	export let url = '';

	function gotoProject() {
		goto(`/projects/${url}`, { replaceState: false });
	}
</script>

<div
	class="outline bg-opacity-95 bg-gray-300 p-3 flex flex-col gap-2 hover:cursor-pointer hover:bg-amber-400"
	on:mouseup={gotoProject}
>
	<h1 class="text-xl">{title}</h1>
	<p class="flex gap-2 flex-wrap">
		{#each tags as tag}
			<span class="outline outline-1 outline-gray-700 px-1 text-gray-700 text-sm hover:bg-white">{tag}</span>
		{/each}
	</p>
	<p>{description}</p>
</div>
