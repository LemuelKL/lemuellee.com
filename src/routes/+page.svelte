<script lang="ts">
	import avatar from '$lib/assets/lemuel-casual.webp';
	import ResumeBlock from './ResumeBlock.svelte';

	const identities = [
		{
			title: 'International Exchange',
			organisation: 'RHUL',
			org_colour: 'text-orange-400'
		},
		{
			title: 'BEng(CompSc)',
			organisation: 'HKU',
			org_colour: 'text-emerald-700'
		},
		{
			title: 'Question Writer & Programmer',
			organisation: 'SPYC',
			org_colour: 'text-green-500'
		},
		{
			title: 'Full Stack Developer',
			organisation: 'SPYC',
			org_colour: 'text-green-500'
		},
		{
			title: 'Teaching Assistant',
			organisation: 'HKU',
			org_colour: 'text-emerald-700'
		},
		{
			title: 'Class of 2020',
			organisation: 'SPYC',
			org_colour: 'text-green-500'
		}
	];
</script>

<svelte:head>
	<title>About - Lemuel LEE Kwok Lam</title>
	<meta
		name="description"
		content="Lemuel is studying Theoretical Computer Science in The University of Hong Kong. Exchange student at Royal Holloway, University of London. Tutor at HKU for ENGG1330 and ENGG1340 in 2021-22."
	/>
</svelte:head>

<div class="flex h-full w-full p-2 sm:p-4">
	<div
		class="relative m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-2 md:flex-row lg:gap-24"
	>
		<img
			src={avatar}
			class="max-w-[12em] object-cover p-4 drop-shadow-[0_35px_65px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_35px_65px_rgba(255,255,255,0.2)] sm:max-w-[14em] md:h-auto md:w-1/4"
			alt=""
		/>
		<div
			class="flex flex-grow flex-col justify-center gap-2 bg-white p-4 dark:bg-zinc-900 dark:text-zinc-200"
		>
			<div class="text-center text-3xl font-bold md:text-left">Lemuel Lee Kwok Lam</div>
			<div class="text-center text-xl font-medium md:text-left">
				Theoretical Computer Science
			</div>
			<div class="mb-2 h-1 w-full bg-orange-400" />
			{#each identities as identity}
				<div class="flex w-full items-center gap-4">
					<div class="font-bold">{identity.title}</div>
					<div class="flex-grow" />
					<div class={identity.org_colour}>{identity.organisation}</div>
				</div>
			{/each}
		</div>
		<div
			class="text-bold absolute right-0 -bottom-12 hidden w-full max-w-5xl justify-end md:flex"
		>
			<ResumeBlock />
		</div>
		<div class="p-1 md:hidden"><ResumeBlock /></div>
	</div>
</div>
