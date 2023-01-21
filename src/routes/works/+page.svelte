<script lang="ts">
	interface Work {
		title: string;
		tags: string[];
		description: string;
		date: string;
		links: string[];
		thumbnail: string;
	}

	const works: Work[] = [
		{
			title: 'Personal Website',
			tags: [
				'Web Development',
				'SvelteKit',
				'TailwindCSS',
				'MDsveX',
				'KaTeX',
				'Typescript',
				'Netlify'
			],
			description:
				'Personal website built with SvelteKit, TailwindCSS, MDsveX, KaTeX, Typescript, and Netlify. Includes a blog, a list of works, and my resume. Simple and fast.',
			links: ['https://www.github.com/LemuelKL/lemuel.pp.ua', 'https://www.lemuel.pp.ua'],
			thumbnail: 'https://example.com',
			date: 'Jan 2023'
		},
		{
			title: 'CIFAR10-HOG-PCA-SVM',
			tags: ['Machine Learning', 'Computer Vision'],
			description:
				'Image classifier for the CIFAR-10 dataset. 62% accuracy without deep neural network or convolutional kernels. Feature extraction via Histogram of Oriented Gradients. Dimensionality reduction via Grayscaling, HOG, and Principal Component Analysis. Support Vector Machine with the radial basis function kernel. 5 minutes to train.',
			links: ['https://github.com/LemuelKL/CIFAR10-HOG-PCA-SVM'],
			thumbnail: 'https://example.com',
			date: 'Dec 2022'
		},
		{
			title: 'Parallel Samplesort',
			tags: ['Multi-threading', 'Semaphore', 'Mutex lock'],
			description:
				'Mutli-threaded Samplesort with arbitrary number of threads. Sorts 10^8 integers in 5 seconds with 16 threads.',
			date: 'Nov 2022',
			links: [],
			thumbnail: 'https://example.com'
		},
		{
			title: '3230shell',
			tags: ['Operating Systems', 'C'],
			description:
				'Linux shell which supports command parsing, program execution, signals handling, multiple background processes, arbitrary number of piped processes and process statistics in any combinations.',
			links: [],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},
		{
			title: 'Enoch Bible Reading Challenge',
			tags: ['Fullstack Web Development', 'PWA', 'Vue.js', 'Supabase'],
			description:
				'Bible reading challenge Progressive Web App tailored made for a church. Readers read 8 chapters weekly to finish all 1189. Includes leader-board and progress tracker.',
			links: ['https://github.com/LemuelKL/bible-reading-challenge'],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},
		{
			title: 'CMM',
			tags: ['Cryptocurrency', 'Algorithmic Trading'],
			description:
				'Back-testing suite for ALGOGENE Algo Crypto Trading Challenge 2022 (Global). Market pattern detection and alert via web-hook. Involves APIs of Trading View, Binance, Alpaca, Google Cloud, and Discord.',
			links: ['https://github.com/JOEYLEE1121/CMM'],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},
		{
			title: 'WinMaths',
			tags: [
				'Web Development',
				'Meta-language Engineering',
				'Functional Programming',
				'Typesetting'
			],
			description:
				'Jointly developed. An innovative e-learning platform for mathematics and physics. Used by hundreds of students daily. A web app that takes a meta-JavaScript and KaTeX program and generate multiple-choice questions according to the teaching syllabus and past public exam papers.',
			links: [
				'https://github.com/d-mok/MathTree',
				'https://std.stheadline.com/smartparents/article/2572/周刊內容-升學教育-沙田培英中學-STEM成資優教育重點-610期'
			],
			thumbnail: 'https://example.com',
			date: '2019'
		},
		{
			title: 'HackOS',
			tags: ['Unity', 'C#', 'Game Development', 'Cyber-security'],
			description:
				'Offensive cyber-security simulator game. Sandbox experience with pruned replicas of nmap, ssh, hydra, and an array of UNIX-like commands. Participating project of the 6th InnoShow held by the Faculty of Engineering, The University of Hong Kong.',
			links: [
				'https://innoacademy.engg.hku.hk/hack/',
				'https://youtu.be/_CbzQMBAphA',
				'https://www.github.com/LemuelKL/HackOS'
			],
			thumbnail: 'https://example.com',
			date: 'May 2022'
		},
		{
			title: 'RNA Fighter',
			tags: ['Game', 'C++', 'Ncurses'],
			description:
				'Terminal puzzle-solving game with colored text user-interface. Type RNA sequences to defuse viruses. Includes text-based dialogues, scroll view, page navigation, and in-place buffer update.',
			links: [
				'https://youtu.be/C9JVxHDk_iU',
				'https://github.com/LemuelKL/ENGG1340-Group135'
			],
			thumbnail: 'https://example.com',
			date: 'May 2021'
		},
		{
			title: 'Duckietown',
			tags: ['Robotics', 'Computer Vision', 'Reinforcement Learning', 'Self Driving'],
			description:
				'Simulated self-driving for Duckietown with Deep Deterministic Policy Gradient with Actor & Critic networks.',
			links: ['https://youtu.be/DUwFEdvExOc'],
			date: 'Dec 2020',
			thumbnail: 'https://example.com'
		},
		{
			title: 'Bubble Sheet OMR',
			tags: ['Computer Vision', 'Python', 'OpenCV', 'OMR', 'Qt'],
			description:
				'GUI program written in Qt to detect MCQ options given a bubble sheet pdf. Coordinates can be exported for automatic marking purpose. Supports fully automatic detection, and fine manual adjustments. Multi-threaded.',
			links: [],
			thumbnail: 'https://example.com',
			date: 'Jun 2019'
		},
		{
			title: 'Real-time Room Status System',
			tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'RFID'],
			description:
				'Developed and used for STEM Camp 2018 & 2019 at Shatin Pui Ying College. Students from 16 primary schools could view booth/room statuses on iPads, and check in & out by tapping RFID cards.',
			date: 'Apr 2019',
			links: [],
			thumbnail: 'https://example.com'
		},
		{
			title: 'School Library Management System SLMS',
			tags: ['Qt', 'C++', 'SQLite'],
			description:
				'School Library Management System. Developed with Qt and SQLite, a GUI program that provides CRUD functionalities to common library administration, such as book categorization, borrow/return management, mass book record import, barcode scanning, and overdue alert. Object-oriented and separately compiled.',
			date: 'May 2019',
			links: [],
			thumbnail: 'https://example.com'
		},
		{
			title: 'Contact List Manager',
			tags: ['Windows API', 'C++', 'CLI'],
			description:
				'Terminal contact manager with colored text user-interface. Provides CRUD functionalities to manage contacts with multiple fields. Uses hashing algorithms for authentication. Built with Windows API and C++.',
			date: 'May 2018',
			links: [],
			thumbnail: 'https://example.com'
		}
	];
</script>

<div class="mx-auto h-full max-w-5xl p-4">
	<div class="flex h-full w-full flex-col items-start justify-center divide-y-2">
		{#each works as work}
			<div
				class="flex w-full flex-col gap-1 p-2 hover:bg-orange-50 dark:hover:bg-orange-900/10"
			>
				<div class="flex items-center justify-between">
					<div class="text-2xl text-orange-700">{work.title}</div>
					<div>{work.date}</div>
				</div>

				<div class="flex flex-wrap items-center">
					{#each work.tags as tag}
						<div class="text-xs">{tag}</div>
						<div class="mx-2 h-1 w-1 rounded-full bg-zinc-400 last:hidden" />
					{/each}
				</div>
				<div>{work.description}</div>
				<div class="flex flex-col">
					{#each work.links as link}
						<div class="self-end">
							<a
								href={link}
								target="_blank"
								rel="noreferrer"
								class="text-sm text-blue-900 hover:underline dark:text-blue-200"
							>
								{link}
							</a>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
