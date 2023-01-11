<script>
	import Layout from './../Layout.svelte';
</script>

<Layout bgImgUrl="Fq14Fsk.jpeg">
	<div slot="content" class="w-full flex flex-col items-center p-4 gap-4">
		<div class="bg-gray-200 outline w-full flex justify-center gap-4 p-3">
			<div class="flex items-center gap-1">
				<img src="github-mark/github-mark.png" alt="github logo" class="w-6 h-6" />
				<a href="https://www.github.com/LemuelKL">LemuelKL</a>
			</div>
			<div class="flex items-center gap-1">
				<img src="linkedin.svg" alt="github logo" class="w-6 h-6" />
				<a href="https://www.linkedin.com/in/lemuelkl/">lemuelkl</a>
			</div>
			<div class="flex items-center gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					/>
				</svg>

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
	.bg-nature {
		background-color: #13589976;
		background-image: url('Fq14Fsk.jpeg');
		background-size: cover;
	}

	a:hover {
		background-color: gold;
		text-decoration: underline;
	}
</style>
