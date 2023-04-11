<script lang="ts">
	import { GithubBrand, LinkedinBrand, YoutubeBrand } from 'svelte-awesome-icons';

	import avatar from '$lib/assets/lemuel-casual.webp';

	const location = 'London';
	const phone = '+44 07597 243186';
	const email = 'lemuellee.kl@gmail.com';
</script>

<svelte:head>
	<title>About - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="Lemuel is studying Computer Science in The University of Hong Kong. GitHub | LinkedIn | YouTube"
	/>
</svelte:head>

<div class="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-8">
	<img
		src={avatar}
		class="max-w-[12em] object-cover p-4 drop-shadow-[0_35px_65px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_35px_65px_rgba(255,255,255,0.2)] sm:max-w-[14em] md:h-auto md:w-1/4"
		alt=""
	/>
	<div
		class="flex h-14 w-full items-center justify-center gap-4 bg-white px-2 dark:bg-zinc-900 md:gap-8 md:px-8"
	>
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
					class="h-8 w-8 transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-gray-700 dark:text-gray-200 hover:dark:text-white sm:h-12 sm:w-12"
				/>
			</a>
			<a href="https://www.linkedin.com/in/lemuelkl/" target="_blank" rel="noreferrer">
				<LinkedinBrand
					class="h-8 w-8 text-blue-900 transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-blue-700 sm:h-12 sm:w-12"
				/>
			</a>
			<a href="https://www.youtube.com/c/Luv2049" target="_blank" rel="noreferrer">
				<YoutubeBrand
					class="h-8 w-8 text-red-900 transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-red-700 sm:h-12 sm:w-12"
				/>
			</a>
		</div>
	</div>
</div>
