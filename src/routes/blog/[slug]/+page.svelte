<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="prose min-w-full p-3">
	<div class="first-letter:text-3xl text-2xl font-serif ">{data.title}</div>
	<div>{data.date}</div>
  <div class="w-full bg-gray-400 h-[1px]"></div>
	<svelte:component this={data.content} />
</div>
