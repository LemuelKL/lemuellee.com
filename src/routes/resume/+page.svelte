<script lang="ts">
	import ResumeBlock from './ResumeBlock.svelte';
	import * as Flag from 'svelte-flag-icons';

	interface identity {
		title: string;
		organisation: string;
		org_short: string;
		org_colour: string;
		country_code: keyof typeof Flag;
		start_date: string;
		end_date: string;
	}

	const identities: identity[] = [
		{
			title: 'Teaching Assistant',
			organisation: 'The University of Hong Kong',
			org_short: 'HKU',
			org_colour: 'text-emerald-700',
			country_code: 'Hk',
			start_date: 'Sep 2023',
			end_date: 'Dec 2023'
		},
		{
			title: 'Peer Mentor',
			organisation: 'The University of Hong Kong',
			org_short: 'HKU',
			org_colour: 'text-emerald-700',
			country_code: 'Hk',
			start_date: 'Aug 2023',
			end_date: 'Jun 2024'
		},
		{
			title: 'Modeller Intern',
			organisation: 'Low Carbon Contracts Company',
			org_short: 'LCCC',
			org_colour: 'text-blue-500',
			country_code: 'Gb',
			start_date: 'May 2023',
			end_date: 'Aug 2023'
		},
		{
			title: 'International Exchange',
			organisation: 'Royal Holloway, University of London',
			org_short: 'RHUL',
			org_colour: 'text-orange-400',
			country_code: 'Gb',
			start_date: 'Jan 2023',
			end_date: 'Jun 2023'
		},
		{
			title: 'Full Stack Developer',
			organisation: 'Shatin Pui Ying College',
			org_short: 'SPYC',
			org_colour: 'text-green-500',
			country_code: 'Hk',
			start_date: 'Jun 2022',
			end_date: 'Aug 2022'
		},
		{
			title: 'Teaching Assistant',
			organisation: 'The University of Hong Kong',
			org_short: 'HKU',
			org_colour: 'text-emerald-700',
			country_code: 'Hk',
			start_date: 'Sep 2021',
			end_date: 'Jun 2022'
		},
		{
			title: 'Question Writer & Programmer',
			organisation: 'Shatin Pui Ying College',
			org_short: 'SPYC',
			org_colour: 'text-green-500',
			country_code: 'Hk',
			start_date: 'Mar 2021',
			end_date: 'Aug 2021'
		}
	];
</script>

<svelte:head>
	<title>Resume - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="Lemuel is studying Theoretical Computer Science in The University of Hong Kong. Exchange student at Royal Holloway, University of London. Tutor at HKU for ENGG1330 and ENGG1340 in 2021-22."
	/>
</svelte:head>

<div class="flex h-full w-full p-2 sm:p-4">
	<div
		class="relative m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-2 md:flex-row lg:gap-24"
	>
		<div
			class="flex w-full flex-grow flex-col justify-center gap-2 p-4 backdrop-blur-sm dark:text-zinc-200"
		>
			<div class="flex flex-col md:flex-row md:items-center md:gap-5">
				<div class="text-3xl font-bold">BEng CompSc</div>
				<div class="text-xl font-medium">class of 2024</div>
				<div class="text-xl font-medium">The University of Hong Kong</div>
			</div>
			<div class="mb-2 h-1 w-full bg-orange-400" />
			<!-- Desktop -->
			<table class="hidden border-separate border-spacing-y-2 border border-none md:table">
				<tbody>
					{#each identities as identity}
						<tr>
							<td class="font-mono text-sm"
								>{identity.start_date} - {identity.end_date}</td
							>
							<td class="text-lg font-semibold">{identity.title}</td>
							<!-- <td class={identity.org_colour + ' text-right'} -->
							<td class={'text-right'}> {identity.organisation}</td>
							<td class="flex items-center justify-end">
								<svelte:component
									this={Flag[identity.country_code]}
									icon={Flag[identity.country_code]}
								/>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<!-- Mobile -->
			<div class="flex w-full flex-col md:hidden">
				{#each identities as identity}
					<div class="flex flex-grow flex-row items-center justify-between gap-3">
						<div class="text-lg font-semibold">{identity.title}</div>
						<div class="flex-grow" />
						<!-- <div class={identity.org_colour}>{identity.org_short}</div> -->
						<div>{identity.org_short}</div>
						<svelte:component
							this={Flag[identity.country_code]}
							icon={Flag[identity.country_code]}
						/>
					</div>
				{/each}
			</div>
		</div>
		<div
			class="text-bold absolute -bottom-12 right-0 hidden w-full max-w-5xl justify-end md:flex"
		>
			<ResumeBlock />
		</div>
		<div class="p-1 md:hidden"><ResumeBlock /></div>
	</div>
</div>
