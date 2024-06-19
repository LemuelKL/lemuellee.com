<script lang="ts">
    import ResumeBlock from './ResumeBlock.svelte';
    import * as Flag from 'svelte-flag-icons';

    interface identity {
        title: string;
        organisation: string;
        org_short: string;
        org_colour: string;
        country_code: keyof typeof Flag;
        time: string;
    }

    const identities: identity[] = [
        {
            title: 'Teaching Assistant',
            organisation: 'The University of Hong Kong',
            org_short: 'HKU',
            org_colour: 'text-emerald-700',
            country_code: 'Hk',
            time: 'Three semesters'
        },
        {
            title: 'Quantitative Developer Intern',
            organisation: 'Low Carbon Contracts Company',
            org_short: 'LCCC',
            org_colour: 'text-blue-500',
            country_code: 'Gb',
            time: 'Summer 2023'
        },
        {
            title: 'Full Stack Developer',
            organisation: 'Shatin Pui Ying College',
            org_short: 'SPYC',
            org_colour: 'text-green-500',
            country_code: 'Hk',
            time: 'Summer 2022'
        },
        {
            title: 'Question Programmer',
            organisation: 'Shatin Pui Ying College',
            org_short: 'SPYC',
            org_colour: 'text-green-500',
            country_code: 'Hk',
            time: 'Spring & Summer 2021'
        }
    ];
</script>

<svelte:head>
    <title>Resume - Lemuel Lee</title>
    <meta
        name="description"
        content="Lemuel is a BEng Computer Science graduate from The University of Hong Kong. He has experience in teaching, mentoring, software engineering, and scientific modelling."
    />
</svelte:head>

<div class="flex h-full w-full p-2 sm:p-4">
    <div
        class="relative m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-2 md:flex-row lg:gap-24"
    >
        <div
            class="flex w-full flex-grow flex-col justify-center gap-2 p-4 backdrop-blur-sm dark:text-zinc-200"
        >
            <div class="flex flex-col opacity-50 md:flex-row md:items-center md:gap-5">
                <div class="w-48 text-3xl font-bold">MSc EDSML</div>
                <div class="flex items-center">
                    <div class="hidden w-32 text-xl font-light sm:block">incoming</div>
                    <div class="mr-2 h-4 w-4 bg-blue-700" />
                    <div class="text-lg font-medium sm:text-xl">Imperial College London</div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:gap-5">
                <div class="w-48 text-3xl font-bold">BEng CompSc</div>
                <div class="flex items-center">
                    <div class="hidden w-32 text-xl font-light sm:block">2024</div>
                    <div class="mr-2 h-4 w-4 bg-green-700" />
                    <div class="text-lg font-medium sm:text-xl">The University of Hong Kong</div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:items-center md:gap-5">
                <div class="hidden w-48 text-3xl font-bold md:invisible md:block">BEng CompSc</div>
                <div class="flex items-center">
                    <div class="hidden w-32 text-xl font-light sm:block">exchange</div>
                    <div class="mr-2 h-4 w-4 bg-orange-700" />
                    <div class="text-lg font-medium sm:text-xl">
                        Royal Holloway, University of London
                    </div>
                </div>
            </div>
            <div class="mb-2 h-1 w-full bg-orange-400" />
            <!-- Desktop -->
            <table class="hidden border-separate border-spacing-y-2 border border-none md:table">
                <tbody>
                    {#each identities as identity}
                        <tr>
                            <td class="font-mono text-sm">{identity.time}</td>
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
