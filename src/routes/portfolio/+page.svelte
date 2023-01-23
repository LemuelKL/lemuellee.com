<script lang="ts">
	import type { Work } from '$lib/types/portfolio';
	import WorkDisplay from './Work.svelte';

	const works: Work[] = [
		{
			title: 'Personal Website',
			tags: ['SvelteKit', 'TailwindCSS', 'MDsveX', 'KaTeX', 'Typescript'],
			description: [
				'SvelteKit, TailwindCSS, TypeScript, KaTeX, Vite, Netlify, MDsveX, PrismJS, RehypeJS.',
				'Custom Content Management System for managing dynamic imports of markdown files.',
				'Supports Svelte, KaTeX, and HTML & CSS inside markdown files.',
				'Fully static and pre-rendered.',
				'Achieved in Google Lighthouse: Performance (96), Accessibility (97), Best Practices (100), SEO (100).'
			],
			links: ['https://github.com/LemuelKL/lemuellee.com', 'https://lemuellee.com'],
			thumbnail: 'https://example.com',
			date: 'Jan 2023'
		},
		{
			title: 'ALGOGENE Algo Crypto Trading Challenge',
			tags: ['Cryptocurrency', 'Algorithmic Trading'],
			description: [
				'Market pattern detection of Order Block, RSI, MFI, MACD, and various candle patterns.',
				'Probability-based volume allocation with considerations on past limit orders.',
				'Achieved 530M PnL from 1M during Test Round for BTCUSD on the 2018-2020 market. Overall score 86/100.',
				'Trading bot written in Python with an event-driven architecture. Runs on the ALGOGENE platform.'
			],
			links: ['https://github.com/JOEYLEE1121/CMM'],
			thumbnail: 'https://example.com',
			date: 'Jan 2023'
		},
		{
			title: 'CIFAR10-HOG-PCA-SVM',
			tags: ['Machine Learning', 'Computer Vision'],
			description: [
				'Image classifier for the CIFAR-10 dataset. Support Vector Machine with the radial basis function kernel. 5 minutes to train.',
				'62% accuracy without deep neural network or convolutional kernels.',
				'Feature extraction via Histogram of Oriented Gradients.',
				'Dimensionality reduction via Grayscaling, HOG, and Principal Component Analysis.'
			],
			links: ['https://github.com/LemuelKL/CIFAR10-HOG-PCA-SVM'],
			thumbnail: 'https://example.com',
			date: 'Dec 2022'
		},
		{
			title: 'Parallel Samplesort',
			tags: ['Multi-threading', 'Semaphore', 'Mutex lock'],
			description: [
				'Mutli-threaded Samplesort with arbitrary number of threads. Sorts 10^8 integers in 5 seconds with 16 threads.'
			],
			date: 'Nov 2022',
			links: [],
			thumbnail: 'https://example.com'
		},
		{
			title: 'Jane Street Electronic Trading Challenge',
			tags: ['Algorithmic Trading', 'Python'],
			description: [
				'1st runner-up out of 17 teams in terms of final capital.',
				'Built a bot to trade various kinds of stocks including bonds, ADRs, and ETFs by interacting with an emulated exchange.',
				'Focused on market-making and arbitrage. High frequency and tick-based.'
			],
			links: [],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},
		{
			title: 'J.P. Morgan Code for Good',
			tags: ['Fullstack', 'Vue.js', 'Supabase'],
			description: [
				'Developed for Junior Achievement Hong Kong, a job shadowing web app for secondary school students.'
			],
			links: [
				'https://www.linkedin.com/posts/kanokkorn-panatte_codeforgood-jpmorgan-activity-6981847276658860032-VhSF'
			],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},
		{
			title: '3230shell',
			tags: ['Operating Systems', 'C'],
			description: [
				'Linux shell which supports command parsing, program execution, signals handling, multiple background processes, arbitrary number of piped processes and process statistics in any combinations.'
			],
			links: [],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},
		{
			title: 'Enoch Bible Reading Challenge',
			tags: ['Fullstack', 'PWA', 'Vue.js', 'Supabase'],
			description: [
				'Bible reading challenge Progressive Web App tailored made for a church. Readers read 8 chapters weekly to finish all 1189. Includes leader-board and progress tracker.',
				'Fully SPA, and installable as a PWA. Built with Vue.js, TailwindCSS, and Supabase. Deployed on Netlify.'
			],
			links: ['https://github.com/LemuelKL/bible-reading-challenge'],
			thumbnail: 'https://example.com',
			date: 'Oct 2022'
		},

		{
			title: 'SPYC Musical E-ticketing',
			tags: ['E-ticketing', 'Fullstack', 'Vue.js', 'Quasar', 'Supabase'],
			description: [
				'Full-stack web app for managing electronic tickets for the 2022 Shatin Pui Ying College Musical.',
				'Supports multiple ticket types, different guest roles, mail merge, and admission via QR code.',
				'Admin dashboard for order management, seat allocation, and user accounts. Supports CSV import and export, and real-time multi-user editing with different permission levels.'
			],
			links: [],
			thumbnail: 'https://example.com',
			date: 'Aug 2022'
		},
		{
			title: 'School Timetable Generator',
			tags: ['Scheduling', 'Optimization', 'Automation'],
			description: [
				'Multiple timetable generators for differnet purposes such as exams, lessons, and field trips.',
				'Avoids clashes in terms of teacher, room, time. Supports multiple constraints such as teacher availability, room capacity, and lesson duration.',
				'Generalized some core functionalities into a library for future use.'
			],
			links: [],
			thumbnail: 'https://example.com',
			date: 'July 2022'
		},
		{
			title: 'WinMaths',
			tags: [
				'Web Development',
				'Meta-language Engineering',
				'Functional Programming',
				'Typesetting'
			],
			description: [
				'Jointly developed. An innovative e-learning platform for mathematics and physics. Currently in-use by hundreds of students everyday.',
				'Takes program templates written in a custom domain-specific meta-JavaScript & KaTeX language and generate multiple-choice questions according to the teaching syllabus and past public exam papers.',
				'Automatic 2D and 3D graphing of mathematical expressions, as well as common graphs and tables used in the HKDSE Mathematics and Physics syllabus.',
				'Provides automatic grading and feedback for students.'
			],
			links: [
				'https://github.com/d-mok/MathTree',
				'https://std.stheadline.com/smartparents/article/2572/周刊內容-升學教育-沙田培英中學-STEM成資優教育重點-610期'
			],
			thumbnail: 'https://example.com',
			date: 'Since 2019'
		},
		{
			title: 'HackOS',
			tags: ['Unity', 'C#', 'Game Development', 'Cyber-security'],
			description: [
				'Offensive cyber-security simulator game. Sandbox experience with pruned replicas of nmap, ssh, hydra, and an array of UNIX-like commands.',
				'Participating project of the 6th InnoShow held by the Faculty of Engineering, The University of Hong Kong.'
			],
			links: [
				'https://innoacademy.engg.hku.hk/hack/',
				'https://youtu.be/_CbzQMBAphA',
				'https://github.com/LemuelKL/HackOS'
			],
			thumbnail: 'https://example.com',
			date: 'May 2022'
		},
		{
			title: 'Cathay Pacific Hackathon',
			tags: ['Hackathon', 'COVID-19', 'Mobile App Development', 'React Native'],
			description: [
				'Developed a React Native app to display a summary of COVID-19 travel restrictions on an interactive world map.'
			],
			links: [],
			thumbnail: 'https://example.com',
			date: 'Nov 2021'
		},
		{
			title: 'RNA Fighter',
			tags: ['Game', 'C++', 'Ncurses'],
			description: [
				'Terminal puzzle-solving game with interactive and colored text user-interface.',
				'Player types RNA sequences to defuse viruses in time.',
				'Has in-game shop, currency, and high-score leaderboard.',
				'Includes text-based dialogues, scroll view, page navigation, and in-place buffer update.'
			],
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
			description: [
				'Simulated self-driving for Duckietown with Deep Deterministic Policy Gradient with Actor & Critic networks.'
			],
			links: ['https://youtu.be/DUwFEdvExOc'],
			date: 'Dec 2020',
			thumbnail: 'https://example.com'
		},
		{
			title: 'Bubble Sheet OMR',
			tags: ['Computer Vision', 'Python', 'OpenCV', 'OMR', 'Qt'],
			description: [
				'GUI program written in Qt to detect MCQ options given a bubble sheet pdf. Coordinates can be exported for automatic marking purpose. Supports fully automatic detection, and fine manual adjustments. Multi-threaded.'
			],
			links: [
				'https://github.com/LemuelKL/Bubble-Sheet-OMR-OpenCV-Qt',
				'https://github.com/LemuelKL/Multiple-Choice-OMR'
			],
			thumbnail: 'https://example.com',
			date: 'Jun 2019'
		},
		{
			title: 'STEM Camp 2019',
			tags: ['STEM Education', 'Leadership', 'Event Management'],
			description: [
				'Hosted by Shatin Pui Ying College.',
				'Appointed the Head of STEM Committee, organized a STEM day camp for visiting students from 16 primary schools.'
			],
			links: [],
			thumbnail: 'https://example.com',
			date: 'Apr 2019'
		},
		{
			title: 'Real-time Room Status System',
			tags: ['LAMP', 'RFID'],
			description: [
				'Developed and used for STEM Camp 2018 & 2019 at Shatin Pui Ying College. Students from 16 primary schools could view booth/room statuses on iPads, and check in & out by tapping RFID cards.'
			],
			date: 'Apr 2019',
			links: [],
			thumbnail: 'https://example.com'
		},
		{
			title: 'Library Management System',
			tags: ['Qt', 'C++', 'SQLite'],
			description: [
				'Developed with Qt and SQLite, a GUI program that provides CRUD functionalities to common library administration, such as book categorization, borrow/return management, mass book record import, barcode scanning, and overdue alert. Object-oriented and separately compiled.'
			],
			date: 'May 2019',
			links: ['https://github.com/LemuelKL/SLMS'],
			thumbnail: 'https://example.com'
		},
		{
			title: 'Contact List Manager',
			tags: ['Windows API', 'C++', 'CLI'],
			description: [
				'Terminal contact manager with colored text user-interface. Provides CRUD functionalities to manage contacts with multiple fields. Uses hashing algorithms for authentication. Built with Windows API and C++.'
			],
			date: 'May 2018',
			links: [],
			thumbnail: 'https://example.com'
		},
		{
			title: 'Android Controlled Arduino Bluetooth Car',
			tags: ['Arduino', 'Android', 'Bluetooth LE', 'Robotics'],
			description: [
				'EE International Summer Camp 2017 - City University of Hong Kong.',
				'2nd runner-up prize in the Mini-robotic Car Competition',
				'Android app as remote controller for Arduino car. Uses Bluetooth Low Energy to communicate with Arduino. Android app is written in Java, and Arduino code is written in C++.',
				'Custom designed and 3D printed chassis.'
			],
			date: 'July 2017',
			links: ['https://github.com/LemuelKL/Android-Controlled-Arduino-Bluetooth-Car'],
			thumbnail: 'https://example.com'
		}
	];
</script>

<svelte:head>
	<title>Portfolio - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="Domain Specific Meta-language | Functional Programming | Algorithmic Trading | Machine Learning | Self-driving | Fullstack | E-ticketing | Linux | Database | Operating System"
	/>
</svelte:head>

<div class="mx-auto h-full max-w-5xl py-2 px-6">
	<div class="flex h-full w-full flex-col items-start justify-center divide-y-2">
		{#each works as work}
			<WorkDisplay {work} />
		{/each}
	</div>
</div>
