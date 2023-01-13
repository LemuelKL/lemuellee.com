<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Layout from './../Layout.svelte';
	import { GithubBrand, LinkedinBrand, CircleUserSolid, EnvelopeSolid } from 'svelte-awesome-icons';
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
			icon: CircleUserSolid,
			url: 'https://www.overleaf.com/read/jwddjkzcgwgq',
			text: 'Curriculum Vitae'
		},
		{
			icon: EnvelopeSolid,
			url: 'mailto:lemuellee.kl@gmail.com',
			text: 'lemuellee.kl@gmail.com'
		}
	];

	function gotoContact(contactItem: ContactItem) {
		return () => {
			window.open(contactItem.url, '_blank');
		};
	}
	$: helloIdx = 0;
	$: helloDisplay = data.helloDictionary[helloIdx].hello;
	setInterval(() => (helloIdx = (helloIdx + 1) % data.helloDictionary.length), 3500);
	$: quoteIdx = 0;
	$: quoteDisplay = data.teamworkQuote[quoteIdx];
	setInterval(() => (quoteIdx = (quoteIdx + 1) % data.teamworkQuote.length), 6000);
</script>

<Layout bgImgUrl="Fq14Fsk.jpeg">
	<div slot="banner-left">
		<p
			class="font-extrabold text-2xl
            bg-gradient-to-r bg-clip-text text-transparent 
            from-blue-700 via-green-700 to-indigo-700
            animate-text"
		>
			{helloDisplay}
		</p>
	</div>
	<img slot="banner-center" src="lemuel-pro.jpg" class="h-24 rounded-full border-2" alt="lemuel" />
	<div slot="banner-right" class="pr-4">
		<p>{quoteDisplay}</p>
	</div>
	<div slot="content" class="w-full flex flex-col items-center p-4 gap-4">
		<div class="bg-gray-200 outline w-full flex justify-center gap-4 p-3">
			{#each contactItems as item}
				<div
					class="flex items-center gap-1 hover:cursor-pointer group"
					on:mousedown={gotoContact(item)}
				>
					<svelte:component this={item.icon} />
					<div class="hidden sm:block group-hover:bg-yellow-400 group-hover:underline">
						{item.text}
					</div>
				</div>
			{/each}
		</div>
		<div class="w-full max-w-5xl bg-gray-200 outline flex flex-col items-center gap-4 p-3">
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
</Layout>

<style>
	a:hover {
		text-decoration: underline;
	}
</style>
