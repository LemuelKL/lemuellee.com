<script lang="ts">
	import { darkMode } from './../stores';
	import { fade } from 'svelte/transition';
	import { SunSolid, MoonSolid } from 'svelte-awesome-icons';
	function toggleDarkMode() {
		darkMode.set(!$darkMode);
		document.documentElement.classList.toggle('dark');
		document.getElementById('prism-style').href =
			'/prism/themes/prism-one-' + ($darkMode ? 'dark' : 'light') + '.css';
		Prism.highlightAll();
	}
</script>

<div
	on:mousedown={toggleDarkMode}
	class="flex h-8 w-8 flex-col items-center justify-center hover:cursor-pointer hover:bg-slate-900"
>
	{#if $darkMode}
		<div in:fade>
			<SunSolid class="text-yellow-400" />
		</div>
	{:else}
		<div in:fade>
			<MoonSolid class="text-sky-200" />
		</div>
	{/if}
</div>
