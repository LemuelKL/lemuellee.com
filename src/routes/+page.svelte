<script lang="ts">
	import avatar from '$lib/assets/lemuel-pro.webp';
	import wallpaper from '$lib/assets/xavier-teo-qK8Gjuds14k-unsplash.webp';
</script>

<svelte:head>
	<title>About Lemuel Lee</title>
</svelte:head>

<div class="h-full w-full bg-cover" style="background-image: url({wallpaper});">
	<div class="flex h-full w-full items-center justify-center dark:bg-black/30">
		<div class="flex max-h-full max-w-[72rem] md:mx-16 md:max-h-[36rem]">
			<div
				class="dark:bg-orange-900/120 flex w-2/6 flex-col items-center justify-center gap-2 overflow-scroll bg-orange-200/20 p-2 backdrop-blur-md dark:bg-orange-900/10 md:gap-6 md:p-8"
			>
				<div
					class="background-animate rounded-full bg-gradient-to-br from-orange-400 to-blue-400 p-1 dark:from-orange-700 dark:to-blue-700"
				>
					<img
						src={avatar}
						class="h-48 w-32 rounded-full object-cover"
						alt="Lemuel Lee"
					/>
				</div>

				<div class="flex flex-col items-center text-xl font-bold">
					<div>Lemuel</div>
					<div class="text-center">LEE Kwok Lam</div>
					<div class="tracking-widest">李國臨</div>
				</div>
				<div class="h-[1px] w-5/6 rounded-3xl bg-orange-300 dark:bg-orange-400" />
				<div class="flex flex-col items-center font-serif text-sm">
					<div class="text-center text-lg">COMPUTER SCIENCE</div>
					<div class="flex gap-2">
						<div>HKU</div>
						<div>•</div>
						<div>RHUL</div>
					</div>
					<div>Class of 2024</div>
				</div>
			</div>
			<div
				class="flex w-4/6 flex-col items-start gap-2 overflow-scroll bg-black/40 p-4 text-white backdrop-blur-sm md:gap-4 md:p-8"
			>
				<div class="text-5xl font-bold md:text-7xl">Hello</div>
				<div>Here's who I am & what I do</div>
				<div class="flex gap-2">
					<a
						class="flex h-8 items-center rounded-md px-4 text-sm text-white ring-2 ring-blue-200 transition-all duration-75 ease-in hover:bg-blue-700/50 dark:ring-blue-700 dark:hover:bg-gray-900"
						href="/resume"
					>
						<div>RESUME</div>
					</a>
					<a
						class="flex h-8 items-center rounded-md px-4 text-sm text-white ring-2 ring-blue-200 transition-all duration-75 ease-in hover:bg-blue-700/50 dark:ring-blue-700 dark:hover:bg-gray-900"
						href="/works"
					>
						<div>WORKS</div>
					</a>
				</div>
				<div class="h-0 md:h-4" />
				<div class="text-gray-200">
					My study focuses on Theoretical Computer Science, such as Software Language,
					Optimization, and Functional Programming. I am also educated in Machine
					Learning, Deep Learning, and Computer Vision.
				</div>
				<div>
					I have developed and maintained software in a team, serving hundreds of users. I
					am skilled in web development with practical knowledge in React, Vue, Svelte,
					Typescript, Node.js, MySQL, and MongoDB.
				</div>
				<div>I believe in simplicity and reliability.</div>
				<a class="self-end hover:underline" href="/blog/about-me">More about me</a>
			</div>
		</div>
	</div>
</div>
