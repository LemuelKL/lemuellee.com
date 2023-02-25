<script lang="ts">
	import { onMount } from 'svelte';
	import { darkMode } from './../stores';
	import {
		GithubBrand,
		LinkedinBrand,
		YoutubeBrand,
		InstagramBrand,
		LightbulbRegular,
		LightbulbSolid
	} from 'svelte-awesome-icons';

	onMount(() => {
		if (localStorage.getItem('darkMode') === 'true') darkMode.set(true);
		darkMode.subscribe((value) => {
			if (value) document.documentElement.classList.add('dark');
			else document.documentElement.classList.remove('dark');
		});
	});

	const location = 'London';
	const phone = '+44 07597 243186';
	const email = 'lemuellee.kl@gmail.com';
</script>

<footer
	class="absolute bottom-0 flex h-10 sm:h-12 w-full items-center gap-4 border-t bg-white px-2 text-xs dark:bg-zinc-900 md:gap-8 md:px-8"
>
	<button on:click={() => darkMode.set(!$darkMode)} class="hover:cursor-pointer">
		{#if $darkMode}
			<LightbulbRegular class=" hover:text-yellow-400" />
		{:else}
			<LightbulbSolid class="hover:text-gray-400" />
		{/if}
	</button>
	<div class="mx-auto" />
	<div class="hidden flex-col items-center sm:flex">
		<div class="font-bold">Now at</div>
		<div>{location}</div>
	</div>
	<div class="hidden flex-col items-center sm:flex">
		<div class="font-bold">Call</div>
		<div>{phone}</div>
	</div>
	<div class="hidden flex-col items-center sm:flex">
		<div class="font-bold">Write</div>
		<div>{email}</div>
	</div>
	<div class="flex flex-col sm:hidden">
		<div>{phone}</div>
		<div>{email}</div>
	</div>
	<div class="flex items-center gap-2">
		<a href="https://www.github.com/LemuelKL" target="_blank" rel="noreferrer">
			<GithubBrand
				class="transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-gray-700"
			/>
		</a>
		<a href="https://www.linkedin.com/in/lemuelkl/" target="_blank" rel="noreferrer">
			<LinkedinBrand
				class="transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-blue-700"
			/>
		</a>
		<a href="https://www.youtube.com/c/Luv2049" target="_blank" rel="noreferrer">
			<YoutubeBrand
				class="transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-red-700"
			/>
		</a>
		<a href="https://www.instagram.com/lemuel.uk/" target="_blank" rel="noreferrer">
			<InstagramBrand
				class="transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-pink-700"
			/>
		</a>
	</div>
</footer>
