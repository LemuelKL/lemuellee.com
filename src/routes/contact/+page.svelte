<script>
	import Layout from './../Layout.svelte';
	import { GithubBrand, LinkedinBrand, EnvelopeSolid } from 'svelte-awesome-icons';
</script>

<Layout bgImgUrl="Fq14Fsk.jpeg">
	<img slot="banner-center" src="lemuel-pro.jpg" class="h-24 rounded-full border-2" alt="lemuel" />
	<div slot="content" class="w-full flex flex-col items-center p-4 gap-4">
		<div class="bg-gray-200 outline w-full flex justify-center gap-4 p-3">
			<div class="flex items-center gap-1">
				<GithubBrand />
				<a href="https://www.github.com/LemuelKL">LemuelKL</a>
			</div>
			<div class="flex items-center gap-1">
				<LinkedinBrand />
				<a href="https://www.linkedin.com/in/lemuelkl/">lemuelkl</a>
			</div>
			<div class="flex items-center gap-1">
				<EnvelopeSolid />
				<a href="mailto:lemuellee.kl@gmail.com">lemuellee.kl@gmail.com</a>
			</div>
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
		background-color: gold;
		text-decoration: underline;
	}
</style>
