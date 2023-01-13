<script>
	import Project from './Project.svelte';

	const projects = [
		{
			title: 'Personal Site',
			tags: ['SvelteKit', 'Netlify', 'TailwindCSS'],
			description:
				'My personal website at lemuel.pp.ua. Built with SvelteKit, Netlify, and TailwindCSS. It is a work in progress. It will be updated with new projects and blog posts.'
		},
		{
			title: 'CIFAR10-HOG-PCA-SVM',
			tags: ['Machine Learning', 'Computer Vision'],
			description:
				'Image classifier for the CIFAR-10 dataset. 62% accuracy without deep neural network or convolutional kernels. Feature extraction via Histogram of Oriented Gradients. Dimensionality reduction via Grayscaling, HOG, and Principal Component Analysis. Support Vector Machine with the radial basis function kernel. 5 minutes to train.',
			url: 'cifar10-hog-pca-svm'
		},
		{
			title: 'Parrellelised Samplesort',
			tags: ['Multithreading', 'Semaphore', 'Mutex Lock'],
			description:
				'Mutli-threaded Samplesort with arbitrary number of threads. Sorts 10^8 integers in 5 seconds with 16 threads.',
			url: 'parallelised-samplesort'
		},
		{
			title: '3230shell',
			tags: ['Operating System', 'Linux'],
			description:
				'Linux shell which supports command parsing, program execution, signals handling, multiple background processes, arbitrary number of piped processes and process statistics in any combinations.'
		},
		{
			title: 'Enoch BRC',
			tags: ['Fullstack', 'PWA', 'Static Site'],
			description:
				'Bible reading challenge Progressive Web App tailored made for a church. Readers read 8 chapters weekly to finish all 1189. Includes leader-board and progress tracker.'
		},
		{
			title: 'CMM',
			tags: ['Cryptocurrency', 'Algorithmic Trading'],
			description:
				'Back-testing suite for ALGOGENE Algo Crypto Trading Challenge 2022 (Global). Market pattern detection and alert via web-hook. Involves APIs of Trading View, Binance, Alpaca, Google Cloud, and Discord.'
		},
		{
			title: 'WinMaths',
			tags: [
				'Functional Programming',
				'Software Language',
				'Code Generation',
				'Typesetting',
				'E-learning'
			],
			description:
				'E-learning platform that generates random Mathematics and Physics MCQs based on templates written in JavaScript & HTML & KaTeX. Incremental development. '
		},
		{
			title: 'HackOS',
			tags: ['Unity', 'Cyber Security'],
			description:
				'Offensive cyber-security simulator game. Sandbox experience with pruned replicas of nmap, ssh, hydra, and an array of UNIX-like commands.'
		},
		{
			title: 'RNA Fighter',
			description:
				'Terminal puzzle-solving game with colored text user-interface. Type RNA sequences to defuse viruses. Includes text-based dialogues, scroll view, page navigation, and in-place buffer update. Built with Ncurses and C++. '
		},
		{
			title: 'A'
		}
	];
</script>

<div class="font-serif p-4 gap-3 grid md:grid-cols-3">
	{#each projects as project}
		<Project {...project} />
	{/each}
</div>
