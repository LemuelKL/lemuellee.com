<script lang="ts">
	import { fade } from 'svelte/transition';
	import { SunSolid, MoonSolid } from 'svelte-awesome-icons';
	let darkMode = false;
	function toggleDarkMode() {
		darkMode = !darkMode;
		document.body.classList.toggle('dark');
	}
</script>

<div
	on:mousedown={toggleDarkMode}
	class="flex flex-col justify-center items-center hover:cursor-pointer hover:bg-slate-900 w-12 h-12"
>
	{#if darkMode}
		<div in:fade>
			<SunSolid class="text-yellow-400" />
		</div>
	{:else}
		<div in:fade>
			<MoonSolid class="text-sky-200" />
		</div>
	{/if}
</div>
