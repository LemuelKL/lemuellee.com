<script lang="ts">
	interface Work {
		title: string;
		description: string;
		date: string;
		links: string[];
		thumbnail: string;
	}

	const works: Work[] = [
		{
			title: '3230shell',
			description: 'A Linux shell',
			links: ['https://example.com'],
			thumbnail: 'https://example.com',
			date: '2020'
		},
		{
			title: 'WinMaths',
			description:
				'Jointly developed. An innovative e-learning platform for mathematics and physics. Used by hundreds of students daily. A web app that takes a meta-JavaScript program and generate multiple-choice questions according to the teaching syllabus and past public exam papers.',
			links: ['https://example.com'],
			thumbnail: 'https://example.com',
			date: '2019'
		},
		{
			title: '3230shell',
			description: 'A Linux shell',
			links: ['https://example.com'],
			thumbnail: 'https://example.com',
			date: '2020'
		}
	];
</script>

<div class="h-full w-full p-8">
	<div class="flex h-full w-full flex-col items-start justify-center divide-y-2">
		{#each works as work}
			<div class="flex w-full flex-col p-2">
				<div class="flex justify-between items-center">
					<div class="text-2xl">{work.title}</div>
					<div>{work.date}</div>
				</div>

				<div>{work.description}</div>
				{#each work.links as link}
					<div class="self-end">
						<a href={link} target="_blank" rel="noreferrer" class="hover:underline">
							{link}
						</a>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
