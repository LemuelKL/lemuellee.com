<script lang="ts">
	import { GithubBrand, LinkedinBrand, AddressCardSolid, AtSolid } from 'svelte-awesome-icons';
	interface ContactItem {
		icon: any;
		url: string;
		text: string;
	}

	const contactItems: ContactItem[] = [
		{
			icon: GithubBrand,
			url: 'https://www.github.com/LemuelKL',
			text: 'LemuelKL'
		},
		{
			icon: LinkedinBrand,
			url: 'https://www.linkedin.com/in/lemuelkl/',
			text: 'lemuelkl'
		},
		{
			icon: AddressCardSolid,
			url: 'https://www.overleaf.com/read/jwddjkzcgwgq',
			text: 'Curriculum Vitae'
		},
		{
			icon: AtSolid,
			url: 'mailto:lemuellee.kl@gmail.com',
			text: 'lemuellee.kl@gmail.com'
		}
	];

	function gotoContact(contactItem: ContactItem) {
		return () => {
			window.open(contactItem.url, '_blank');
		};
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="absolute top-24 flex justify-center w-full">
	<div
		class="rounded-full h-24 p-1 bg-gradient-to-br from-green-100 via-blue-gray-400 to-blue-gray-600 background-animate"
	>
		<img src="/avatar/lemuel-pro.jpg" class="rounded-full h-full" alt="lemuel" />
	</div>
</div>

<div class="flex flex-col items-center p-4 gap-4 mx-auto">
	<div class="bg-gray-200 dark:bg-gray-700 outline w-full flex justify-center gap-4 p-3">
		{#each contactItems as item}
			<div
				class="flex items-center gap-1 hover:cursor-pointer group"
				on:mousedown={gotoContact(item)}
			>
				<svelte:component this={item.icon} />
				<div
					class="hidden sm:block group-hover:bg-yellow-400 
				dark:group-hover:bg-yellow-700
				group-hover:underline"
				>
					{item.text}
				</div>
			</div>
		{/each}
	</div>
	<div class="w-full bg-gray-200 dark:bg-gray-700 outline flex flex-col items-center gap-4 p-3">
		<p>
			I'm currently residing in <a
				href="https://www.royalholloway.ac.uk/student-life/accommodation/undergraduate/kingswood-1-and-2/"
				>Kingswood Hall</a
			>
			of <a href="https://www.royalholloway.ac.uk/">Royal Holloway</a> in
			<a href="https://en.wikipedia.org/wiki/Egham">Egham, UK</a>.
		</p>
		<p>I speak Cantonese natively, English and Mandarin fluently.</p>
	</div>
</div>

<style>
	a:hover {
		text-decoration: underline;
	}
</style>
