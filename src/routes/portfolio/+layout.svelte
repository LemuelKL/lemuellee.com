<script lang="ts">
	import { page } from '$app/stores';
	import type { PortfolioItem } from '$lib/types/portfolio';

	const works: PortfolioItem[] = [
		{
			title: 'HolloRay',
			summary: 'External 3D CAD DSL with JavaFX and Ambiguity Resolved Translators',
			tags: ['Domain-specific language'],
			start_date: 'Jan 2023'
		},
		{
			title: 'SVM Doped',
			summary: 'Statistical image classifier for CIFAR-10.',
			tags: ['Sklearn', 'SVM', 'PCA', 'HOG'],
			start_date: 'Nov 2022',
			end_date: 'Dec 2022'
		},
		{
			title: 'Parallel Samplesort',
			summary: 'Multi-threaded samplesort implementation in C.',
			tags: ['Multi-threading', 'Semaphore', 'Mutex']
		},
		{
			title: '3230shell',
			summary: 'Linux shell written in C with process management.',
			tags: ['OS', 'Process', 'Pipe', 'Fork', 'Exec', 'Signal']
		},
		{
			title: 'Enoch Bible Reading Challenge',
			summary: 'Progressive web app to finish the Bible in 1189 days.',
			tags: ['PWA', 'SPA', 'Vue', 'Supabase']
		},
		{
			title: 'E-ticketing System',
			organisation: 'Shatin Pui Ying College',
			summary:
				'Full stack system with multiple web apps: Administration, Mission Control, Admission.',
			tags: ['Vue', 'Quasar', 'Supabase']
		},
		{
			title: 'Timetable Generator',
			organisation: 'Shatin Pui Ying College',
			summary: 'Web app for scheduling various school tasks.',
			tags: ['Vue', 'Scheduling']
		},
		{
			title: 'HackOS',
			organisation: 'The University of Hong Kong',
			summary: 'Hacking simulator game.',
			tags: ['Unity', 'Game Development', 'Cyber Security']
		},
		{
			title: 'RNA Fighter',
			summary: 'Terminal game about COVID-19.',
			tags: ['Ncurses', 'Game Development']
		},
		{
			title: 'Self-driving',
			summary: 'Self-driving robotic car for Duckietown.',
			tags: ['DDPG', 'Deep Learning', 'Robotics']
		},
		{
			title: 'Bubble Sheet OMR',
			summary: 'Optical Mark Recognition for classroom bubble sheet.',
			tags: ['OpenCV', 'Qt']
		},
		{
			title: 'Real-time Room Status System',
			summary: 'Multi-user LAMP stack app for displaying room status.',
			tags: ['LAMP', 'RFID']
		},
		{
			title: 'Library Management System',
			summary: 'Qt app for library administration.',
			tags: ['Qt', 'MySQL']
		},
		{
			title: 'Contact List Manager',
			summary: 'Terminal app for managing multi-field contacts.',
			tags: ['C++', 'Windows API']
		},
		{
			title: 'Remote Controlled Robotic Car',
			summary: 'Robotic arduino car controlled by Android app via Bluetooth LE.',
			tags: ['Robotics', 'Arduino', 'Android']
		}
	];

	const activities: PortfolioItem[] = [
		{
			title: 'Algo Crypto Trading Challenge',
			organisation: 'ALGOGENE',
			summary: 'Finalist Python bot earned 53000% return.',
			tags: ['Algo Trading'],
			start_date: 'Jul 2022',
			end_date: 'Jan 2023'
		},
		{
			title: 'Electronic Trading Challange',
			organisation: 'Jane Street',
			summary: '1st runner-up in capital.',
			tags: ['Algo Trading']
		},
		{
			title: 'Code for Good',
			organisation: 'J.P. Morgan',
			summary: 'Developed a job shadowing web app.',
			tags: ['App Development']
		},
		{
			title: 'Hackathon',
			organisation: 'Cathay Pacific',
			summary:
				'Developed a React Native world map app to display COVID-19 tavel restrictions.',
			tags: ['App Development']
		},
		{
			title: 'STEM Camp',
			organisation: 'Shatin Pui Ying College',
			summary: 'Organised a day camp for students from 16 visiting schools.',
			tags: ['Education', 'Teamwork']
		},
		{
			title: 'EE International Summer Camp',
			organisation: 'HKUST',
			summary: '4-week full-time summer camp on Electronic Engineering and Computer Science.',
			tags: ['Robotic', 'App Development']
		}
	];

	$: tab = $page.url.pathname.split('/')[2];

	$: items = tab === 'work' ? works : activities;
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
					<div
						class="flex flex-col bg-orange-200 bg-opacity-0 p-1 hover:cursor-pointer hover:bg-opacity-20"
					>
						<div class="flex items-center justify-between pt-2">
							<div class="text-2xl font-bold">{item.title}</div>
							<div class="px-1 bg-blue-100/50 dark:bg-blue-900/50">
								{#if item.organisation}
									{item.organisation}
								{/if}
							</div>
						</div>
						<p>{item.summary}</p>
						<div class="flex items-center gap-1 text-sm">
							{#each item.tags as tag}
								<span class="bg-zinc-100 dark:bg-zinc-800 px-1">{tag}</span>
								<div class="mx-1 h-1 w-1 rounded-full bg-zinc-400 last:hidden" />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-span-8 bg-green-400">
			<slot />
		</div>
	</div>
</div>
