<script lang="ts">
	import avatar from '$lib/assets/lemuel-casual.webp';

	const identities = [
		{
			title: 'BEng(CompSc)',
			organisation: 'The University of Hong Kong'
		},
		{
			title: 'International Exchange',
			organisation: 'Royal Holloway, University of London'
		},
		{
			title: 'Teaching Assistant',
			organisation: 'HKU ENGG1330 and ENGG1340'
		},
		{
			title: 'Class of 2020',
			organisation: 'Shatin Pui Ying College'
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

<div class="bg-pattern flex h-full w-full flex-col items-center justify-center gap-4 p-4">
	<div
		class="flex w-full max-w-5xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-24"
	>
		<img
			src={avatar}
			class="max-w-[18em] object-cover saturate-[0.5] hover:saturate-100 lg:h-auto lg:w-1/4"
			alt=""
		/>
		<div class="flex flex-col justify-center gap-2 lg:flex-grow">
			<div class="text-center text-3xl font-bold lg:text-left">Lemuel Lee Kwok Lam</div>
			<div class="text-center text-xl font-medium lg:text-left">
				Theoretical Computer Science Student
			</div>
			<div class="mb-2 h-1 w-full bg-orange-400" />
			{#each identities as identity}
				<div class="flex w-full items-center gap-4">
					<div>{identity.title}</div>
					<div class="flex-grow bg-purple-400" />
					<div>{identity.organisation}</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="text-bold flex w-full max-w-5xl justify-center lg:justify-end ">
		<a
			class="text-orange-400 hover:cursor-pointer hover:underline"
			href="https://www.overleaf.com/read/gdnzsswwgkvs"
			target="_blank"
			rel="noreferrer">Résumé in LaTeX & PDF</a
		>
	</div>
</div>

<style>
	.bg-pattern {
		background-image: radial-gradient(#a4a4a4 0.5px, transparent 0.5px);
		background-size: 16px 16px;
	}
</style>
