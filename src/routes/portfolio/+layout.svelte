<script lang="ts">
	import { page } from '$app/stores';
	import type { PortfolioItem } from '$lib/types/portfolio';

	const works: PortfolioItem[] = [
		{
			type: 'work',
			id: 'holloray',
			title: 'HolloRay',
			summary: 'External 3D CAD DSL with JavaFX and Ambiguity Resolved Translators',
			tags: ['Domain-specific language'],
			start_date: 'Jan 2023'
		},
		{
			type: 'work',
			id: 'svm-doped',
			title: 'SVM Doped',
			summary: 'Statistical image classifier for CIFAR-10.',
			tags: ['Sklearn', 'SVM', 'PCA', 'HOG'],
			start_date: 'Nov 2022',
			end_date: 'Dec 2022'
		},
		{
            type: 'work',
			id: 'parallel-samplesort',
			title: 'Parallel Samplesort',
			summary: 'Multi-threaded samplesort implementation in C.',
			tags: ['Multi-threading', 'Semaphore', 'Mutex']
		},
		{
            type: 'work',
			id: '3230shell',
			title: '3230shell',
			summary: 'Linux shell written in C with process management.',
			tags: ['OS', 'Process', 'Pipe', 'Fork', 'Exec', 'Signal']
		},
		{
            type: 'work',
			id: 'enoch-brc',
			title: 'Enoch Bible Reading Challenge',
			summary: 'Progressive web app to finish the Bible in 1189 days.',
			tags: ['PWA', 'SPA', 'Vue', 'Supabase']
		},
		{
            type: 'work',
			id: 'spyc-eticket',
			title: 'E-ticketing System',
			organisation: 'Shatin Pui Ying College',
			summary:
				'Full stack system with multiple web apps: Administration, Mission Control, Admission.',
			tags: ['Vue', 'Quasar', 'Supabase']
		},
		{
            type: 'work',
			id: 'spyc-timetable',
			title: 'Timetable Generator',
			organisation: 'Shatin Pui Ying College',
			summary: 'Web app for scheduling various school tasks.',
			tags: ['Vue', 'Scheduling']
		},
		{
            type: 'work',
			id: 'hackos',
			title: 'HackOS',
			organisation: 'The University of Hong Kong',
			summary: 'Hacking simulator game.',
			tags: ['Unity', 'Game Development', 'Cyber Security']
		},
		{
            type: 'work',
			id: 'rna-fighter',
			title: 'RNA Fighter',
			summary: 'Terminal game about COVID-19.',
			tags: ['Ncurses', 'Game Development']
		},
		{
            type: 'work',
			id: 'duckietown',
			title: 'Self-driving',
			summary: 'Self-driving robotic car for Duckietown.',
			tags: ['DDPG', 'Deep Learning', 'Robotics']
		},
		{
            type: 'work',
			id: 'bubble-sheet-omr',
			title: 'Bubble Sheet OMR',
			summary: 'Optical Mark Recognition for classroom bubble sheet.',
			tags: ['OpenCV', 'Qt']
		},
		{
            type: 'work',
			id: 'room-status',
			title: 'Real-time Room Status System',
			summary: 'Multi-user LAMP stack app for displaying room status.',
			tags: ['LAMP', 'RFID']
		},
		{
            type: 'work',
			id: 'slms',
			title: 'Library Management System',
			summary: 'Qt app for library administration.',
			tags: ['Qt', 'MySQL']
		},
		{
            type: 'work',
			id: 'clm',
			title: 'Contact List Manager',
			summary: 'Terminal app for managing multi-field contacts.',
			tags: ['C++', 'Windows API']
		},
		{
            type: 'work',
			id: 'ble-car',
			title: 'Remote Controlled Robotic Car',
			summary: 'Robotic arduino car controlled by Android app via Bluetooth LE.',
			tags: ['Robotics', 'Arduino', 'Android']
		}
	];

	const activities: PortfolioItem[] = [
		{
            type: 'activity',
			id: 'algogene-actc',
			title: 'Algo Crypto Trading Challenge',
			organisation: 'ALGOGENE',
			summary: 'Finalist Python bot earned 53000% return.',
			tags: ['Algo Trading'],
			start_date: 'Jul 2022',
			end_date: 'Jan 2023'
		},
		{
            type: 'activity',
			id: 'js-etc',
			title: 'Electronic Trading Challange',
			organisation: 'Jane Street',
			summary: '1st runner-up in capital.',
			tags: ['Algo Trading']
		},
		{
            type: 'activity',
			id: 'jpm-cfg',
			title: 'Code for Good',
			organisation: 'J.P. Morgan',
			summary: 'Developed a job shadowing web app.',
			tags: ['App Development']
		},
		{
            type: 'activity',
			id: 'cathay-hackathon',
			title: 'Hackathon',
			organisation: 'Cathay Pacific',
			summary:
				'Developed a React Native world map app to display COVID-19 tavel restrictions.',
			tags: ['App Development']
		},
		{
            type: 'activity',
			id: 'stem-camp',
			title: 'STEM Camp',
			organisation: 'Shatin Pui Ying College',
			summary: 'Organised a day camp for students from 16 visiting schools.',
			tags: ['Education', 'Teamwork']
		},
		{
            type: 'activity',
			id: 'ee-camp',
			title: 'EE Int. Summer Camp',
			organisation: 'City U, HK',
			summary:
				'4-week full-time international summer camp on Electronic Engineering and Computer Science.',
			tags: ['Robotic', 'App Development']
		}
	];

	$: tab = $page.url.pathname.split('/')[2];
	$: items = tab === 'work' ? works : activities;
	$: itemId = $page.url.pathname.split('/')[3];
</script>

<div class="mx-auto h-full max-w-7xl py-2 px-2">
	<div class="grid h-full grid-cols-12 gap-1">
		<div class="col-span-4 flex h-full max-h-full flex-col overflow-scroll">
			<div class="mb-1 grid h-11 w-full grid-cols-2">
				<a
					class="col-span-1 flex h-11 items-center justify-center border-b-2 hover:bg-orange-50 dark:hover:bg-orange-900"
					class:border-orange-400={tab === 'work'}
					href="/portfolio/work"
				>
					<div>Work</div>
				</a>
				<a
					class="col-span-1 flex h-11 items-center justify-center border-b-2 hover:bg-orange-50 dark:hover:bg-orange-900"
					class:border-orange-400={tab === 'activity'}
					href="/portfolio/activity"
				>
					<div>Activitiy</div>
				</a>
			</div>
			<div
				class="flex h-full max-h-full flex-col gap-1 divide-y divide-orange-400/50 overflow-scroll pr-3"
			>
				{#each items as item}
					<a
						class="flex border-spacing-8 flex-col p-1 pr-1 hover:cursor-pointer hover:bg-orange-200/20"
						class:bg-orange-200={item.id === itemId}
						class:bg-opacity-20={item.id === itemId}
						href={`/portfolio/${item.type}/${item.id}`}
					>
						<div class="flex items-center justify-between pt-2">
							<div
								class="text-2xl font-bold"
								class:text-orange-400={item.id === itemId}
							>
								{item.title}
							</div>
							<div class="bg-blue-100/50 px-1 dark:bg-blue-900/50">
								{#if item.organisation}
									{item.organisation}
								{/if}
							</div>
						</div>
						<p>{item.summary}</p>
						<div class="flex items-center gap-1 text-sm">
							{#each item.tags as tag}
								<span class="bg-zinc-100 px-1 dark:bg-zinc-800">{tag}</span>
								<div class="mx-1 h-1 w-1 rounded-full bg-zinc-400 last:hidden" />
							{/each}
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="col-span-8 overflow-scroll">
			<slot />
		</div>
	</div>
</div>
