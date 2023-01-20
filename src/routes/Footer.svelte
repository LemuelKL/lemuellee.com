<script lang="ts">
	import { onMount } from 'svelte';
	import { darkMode } from './../stores';
	import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';

	onMount(() => {
		if (localStorage.getItem('darkMode') === 'true') darkMode.set(true);
		darkMode.subscribe((value) => {
			if (value) document.documentElement.classList.add('dark');
			else document.documentElement.classList.remove('dark');
			const elem = document.getElementById('prism-style') as HTMLLinkElement;
			if (!elem) return;
			elem.href = '/prism/themes/prism-one-' + ($darkMode ? 'dark' : 'light') + '.css';
			Prism.highlightAll();
		});
	});
</script>

<footer
	class="absolute bottom-0 flex h-16 w-full items-center gap-4 border-t px-2 text-xs md:gap-8 md:px-8"
>
	<label class="relative inline-flex cursor-pointer items-center">
		<input type="checkbox" bind:checked={$darkMode} class="peer sr-only" />
		<div
			class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"
		/>
		<span class="ml-3 text-sm font-light text-gray-900 dark:text-gray-300">
			{$darkMode ? 'Atra' : 'Lux'}
		</span>
	</label>
	<div class="mx-auto" />
	<div class="hidden flex-col items-center sm:flex">
		<div class="font-bold">Now at</div>
		<div>Egham, UK</div>
	</div>
	<div class="hidden flex-col items-center sm:flex">
		<div class="font-bold">Call</div>
		<div>+852 6238 2237</div>
	</div>
	<div class="hidden flex-col items-center sm:flex">
		<div class="font-bold">Write</div>
		<div>lemuellee.kl@gmail.com</div>
	</div>
	<div class="flex flex-col sm:hidden">
		<div>+852 6238 2237</div>
		<div>lemuellee.kl@gmail.com</div>
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
	</div>
</footer>
