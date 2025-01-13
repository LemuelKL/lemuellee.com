<script lang="ts">
    let courses = [
        'COMP 2119|Introduction to Data Structures and Algorithms',
        'COMP 2120|Computer Organization',
        'COMP 2121|Discrete Mathematics',
        'COMP 2396|Object-oriented Programming and Java',
        'COMP 2501|Introduction to Data Science and Engineering',
        'COMP 3230|Principles of Operating Systems',
        'COMP 3234|Computer and Communication Networks',
        'COMP 3270|Artificial Intelligence',
        'COMP 3278|Introduction to Database Management Systems',
        'COMP 3297|Software Engineering',
        'COMP 3314|Machine Learning',
        'COMP 3322|Modern Technologies on World Wide Web',
        'COMP 3329|Computer Game Design and Programming',
        'COMP 3340|Applied Deep Learning',
        'COMP 3358|Distributed and Parallel Computing',
        'COMP 3361|Natural Language Processing',
        'COMP 3414|Experiential Learning on Artificial Intelligence and Robotics',
        'COMP 3516|Data Analytics for IoT',
        'ENGG 1330|Computer Programming I',
        'ENGG 1340|Computer Programming II',
        'FITE 3010|Big Data and Data Mining',
        'MATH 1851|Calculus and Ordinary Differential Equations',
        'MATH 1853|Linear Algebra, Probability and Statistics',
        'CS3480|Software Language Engineering',
        'CS3490|Computational Optimization',
        'CS3510|Functional Programming & Applications',
        'IY2840|Computer & Network Security',
        '|Numerical Programming in Python',
        '|Computational Mathematics',
        '|Data Science and Machine Learning',
        '|Deep Learning',
        '|Environmental Data'
    ];

    let projects = [
        {
            title: 'lemuellee.com',
            desc: 'Personal website built with SvelteKit and TailwindCSS',
            assoc: '7 stars'
        },
        {
            title: 'EnergieID/entsoe-py',
            desc: 'Python API client for ENTSO-E Transparency Platform',
            assoc: '424 stars'
        },
        {
            title: 'raft/raft.github.io',
            desc: 'Official website for the Raft Consensus Algorithm',
            assoc: '1374 stars'
        },
        {
            title: 'd-mok/MathTree',
            desc: 'Web editor and JavaScript-based DSL for generating Maths and Physics MCQs',
            assoc: 'Featured on Sing Tao Daily'
        },
        {
            title: '1189 Challenge',
            desc: 'Full stack Bible Reading Challenge PWA & SPA in Vue, Quasar, Supabase, and Netlify',
            assoc: '15 active users'
        },
        {
            title: 'MC OMR',
            desc: 'Cross-platform C++ bubble sheet processing app in Qt and OpenCV',
            assoc: '13 stars'
        }
    ];
    let sectionsVisible = {
        courses: false,
        projects: true
    };

    let courseworks = [
        {
            title: 'Deep Graph Representation Learning on Corss-border Electricity Trading',
            desc: 'Corss-border electricity trading modelling with spatial-temporal graph NNs: GATs, STGCN, and Transformer'
        },
        {
            title: 'Python ODE solver',
            desc: 'by Taylor expansion and piecewise polynomial interpolation'
        },
        {
            title: 'Monte Carlo simlation',
            desc: 'of magnetic quasi-particle for stable energy configurations'
        },
        {
            title: 'Statistical image classifier',
            desc: 'with HOG, SVM, and PCA at global top 10% accuracy'
        },
        {
            title: 'Statistical time-series acoustic sensing',
            desc: 'of in-door human presence with autocorrelation and fourier analysis'
        },
        {
            title: 'Pacman AI',
            desc: 'with Bayesian Networks, Hidden Markov Models, and Particle Filters'
        },
        {
            title: 'External domain-specific language',
            desc: 'for 3D CAD with Backus–Naur form parser, elided Structural Operational Semantics rules, and interpreter in action semantics powered by JavaFX and Ambiguity Resolved Translators'
        },
        {
            title: 'HackOS',
            desc: 'Educational offensive cyber-security Unity game'
        },
        {
            title: 'Linux shell',
            desc: 'with program execution, signals, piping, background processes, and process statistics'
        },
        {
            title: 'Multieplayer poker card game',
            desc: 'with Java RMI and JMS'
        }
    ];
</script>

<svelte:head>
    <title>Portfolio - Lemuel Lee</title>
    <meta name="description" content="Lemuel's portfolio." />
</svelte:head>

<div class="flex h-full w-full overflow-auto p-2 sm:p-4">
    <div class="relative m-auto flex w-full max-w-5xl flex-col items-start justify-center gap-2">
        <div class="flex w-full items-end justify-between">
            <div class="text-3xl">Courses</div>
            <button
                on:click={() => {
                    sectionsVisible.courses = !sectionsVisible.courses;
                }}
                class="delay-50 pl-4 transition duration-150 ease-in-out hover:scale-90 hover:text-orange-400"
            >
                {#if sectionsVisible.courses}
                    <div class="font-light">collapse</div>
                {:else}
                    <div class="font-light">expand</div>
                {/if}
            </button>
        </div>
        <div
            class="h-1 w-full transition-colors"
            class:bg-orange-400={sectionsVisible.courses}
            class:bg-gray-200={!sectionsVisible.courses}
            class:dark:bg-gray-800={!sectionsVisible.courses}
        />
        <table class:hidden={!sectionsVisible.courses} class="w-full">
            <tbody>
                {#each courses as course}
                    <tr class="hover:bg-gray-200 dark:hover:bg-gray-800">
                        <td class="hidden font-mono sm:block">{course.split('|')[0]}</td>
                        <td class="block sm:hidden">-</td>
                        <td class="pl-4">{course.split('|')[1]}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <div class="w-full text-3xl">Projects</div>
        <div class="h-1 w-full bg-orange-400" />
        <div class="w-full">
            {#each projects as project}
                <div class="mb-2 flex w-full flex-col hover:bg-gray-200 dark:hover:bg-gray-800">
                    <div class="flex items-center justify-between gap-4">
                        <div class="text-xl font-bold">{project.title}</div>
                        <div class="font-light">{project.assoc}</div>
                    </div>
                    <div>{project.desc}</div>
                </div>
            {/each}
        </div>

        <div class="w-full text-3xl">Coursework</div>
        <div class="h-1 w-full bg-orange-400" />
        <div class="w-full">
            {#each courseworks as coursework}
                <div class="mb-2 flex w-full flex-col hover:bg-gray-200 dark:hover:bg-gray-800">
                    <div class="flex items-center justify-between gap-4">
                        <div class="text-xl font-bold">{coursework.title}</div>
                    </div>
                    <div>{coursework.desc}</div>
                </div>
            {/each}
        </div>
    </div>
</div>
