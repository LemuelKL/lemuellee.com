<script lang="ts">
    import ResumeBlock from './ResumeBlock.svelte';

    interface experience {
        title: string;
        title_short: string;
        organisation: string;
        org_short: string;
        time: string;
    }

    const experiences: experience[] = [
        {
            title: 'Founder',
            title_short: 'Founder',
            organisation: 'AI Building Service Management Start-up',
            org_short: 'Start-up',
            time: ''
        },
        {
            title: 'Quantitative Developer Intern',
            title_short: 'Quant Dev Intern',
            organisation: 'Low Carbon Contracts Company, London',
            org_short: 'LCCC, London',
            time: 'Summer 2023'
        },
        {
            title: 'Automation and Optimisation Developer',
            title_short: 'Auto and Optim Dev',
            organisation: 'Shatin Pui Ying College',
            org_short: 'SPYC',
            time: 'Summer 2022'
        },
        {
            title: 'Mathematics and Physics Programmer',
            title_short: 'Maths and Phy Programmer',
            organisation: 'Shatin Pui Ying College',
            org_short: 'SPYC',
            time: 'Summer 2022'
        },
        {
            title: 'Mathematics and Physics Programmer',
            title_short: 'Maths and Phy Programmer',
            organisation: 'Shatin Pui Ying College',
            org_short: 'SPYC',
            time: 'Summer 2021'
        }
    ];

    interface teaching_experience extends experience {
        content: string;
    }

    const teaching_experiences: teaching_experience[] = [
        {
            title: 'Faculty Peer Mentor',
            title_short: 'Faculty Peer Mentor',
            content: 'first-year engineering students',
            organisation: 'Faculty of Engineering',
            org_short: 'Fac. Engg',
            time: '2023 - 2024'
        },
        {
            title: 'Staff-Student Consultative Committee Member',
            title_short: 'SSCC Member',
            content: '',
            organisation: 'Faculty of Engineering',
            org_short: 'Fac. Engg',
            time: 'Autumn 2023'
        },
        {
            title: 'Teaching Assistant',
            title_short: 'Teaching Assistant',
            content: 'Computer Programming (COMP1117)',
            organisation: 'Department of Computer Science',
            org_short: 'Dept. CS',
            time: 'Autumn 2023'
        },
        {
            title: 'Teaching Assistant',
            title_short: 'Teaching Assistant',
            content: 'Computer Programming II (ENGG1340)',
            organisation: 'Department of Computer Science',
            org_short: 'Dept. CS',
            time: 'Spring 2022'
        },
        {
            title: 'Teaching Assistant',
            title_short: 'Teaching Assistant',
            content: 'Computer Programming I (ENGG1330)',
            organisation: 'Department of Computer Science',
            org_short: 'Dept. CS',
            time: 'Autumn 2021'
        }
    ];
</script>

<svelte:head>
    <title>Resume - Lemuel Lee</title>
    <meta
        name="description"
        content="Lemuel is a MSc Environmental Data Science and Machine Learning student at Imperial College London. He has a BEng Computer Science from The University of Hong Kong. He has experience in teaching, mentoring, software engineering, and scientific modelling."
    />
</svelte:head>

<div class="flex h-full w-full overflow-auto p-2 sm:p-4">
    <div
        class="relative m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-2 md:flex-row lg:gap-24"
    >
        <div class="flex w-full flex-grow flex-col justify-center gap-1 p-4 dark:text-zinc-200">
            <div class="flex flex-col justify-between md:flex-row md:items-center md:gap-5">
                <div class="hidden text-xl font-semibold md:block">
                    MSc Environmental Data Science and Machine Learning
                </div>
                <div class="text-xl font-semibold md:hidden">MSc Environmental DS and ML</div>
                <div class="flex items-center">
                    <div class="mr-2 h-2 w-2 bg-blue-700"></div>
                    <div>Imperial College London</div>
                </div>
            </div>
            <div class="flex flex-col justify-between md:flex-row md:items-center md:gap-5">
                <div class="text-xl font-semibold">BEng Computer Science</div>
                <div class="flex items-center">
                    <div class="mr-2 h-2 w-2 bg-green-700"></div>
                    <div>The University of Hong Kong</div>
                </div>
            </div>
            <div class="flex flex-col justify-between md:flex-row md:items-center md:gap-5">
                <div class="text-xl font-light">study abroad</div>
                <div class="flex items-center">
                    <div class="mr-2 h-2 w-2 bg-orange-700"></div>
                    <div>Royal Holloway, University of London</div>
                </div>
            </div>
            <div class="my-2 h-1 w-full bg-orange-400"></div>
            <!-- Desktop -->
            <table class="hidden border-separate border-spacing-y-2 border border-none md:table">
                <tbody>
                    {#each experiences as exp}
                        <tr>
                            <td class="font-mono text-sm">{exp.time}</td>
                            <td class="text-lg font-semibold">{exp.title}</td>
                            <td class={'text-right'}> {exp.organisation}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
            <!-- Mobile -->
            <div class="flex w-full flex-col md:hidden">
                {#each experiences as exp}
                    <div class="flex flex-grow flex-row items-center justify-between gap-3">
                        <div class="text-lg font-semibold">{exp.title_short}</div>
                        <div class="flex-grow"></div>
                        <div class="text-right">{exp.org_short}</div>
                    </div>
                {/each}
            </div>

            <!-- Teaching Experiences -->
            <div class="my-2 h-1 w-full bg-orange-400"></div>
            <div class="my-2 text-right font-semibold">The University of Hong Kong</div>
            <!-- Desktop -->
            <table class="hidden border-separate border-spacing-y-2 border border-none md:table">
                <tbody>
                    {#each teaching_experiences as exp}
                        <tr>
                            <td class="font-mono text-sm">{exp.time}</td>
                            <td class="flex items-center space-x-2">
                                <div class="text-lg font-semibold">{exp.title}</div>
                                <div class="font-light">{exp.content}</div>
                            </td>
                            <td class={'text-right'}> {exp.organisation}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
            <!-- Mobile -->
            <div class="flex w-full flex-col md:hidden">
                {#each teaching_experiences as exp}
                    <div class="flex flex-grow flex-row items-center justify-between gap-3">
                        <div class="text-lg font-semibold">{exp.title_short}</div>
                        <div class="flex-grow"></div>
                        <div class="text-right">{exp.org_short}</div>
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="text-bold absolute right-0 -bottom-12 hidden w-full max-w-5xl justify-end md:flex"
        >
            <ResumeBlock />
        </div>
        <div class="p-1 md:hidden"><ResumeBlock /></div>
    </div>
</div>
