<script>
    import { onMount } from 'svelte';
    import { darkMode } from './../stores';
    import { BarsSolid } from 'svelte-awesome-icons';
    import { page } from '$app/stores';
    export let routes = [
        {
            label: 'ABOUT',
            href: '/'
        },
        {
            label: 'RESUME',
            href: '/resume'
        },
        {
            label: 'PORTFOLIO',
            href: '/portfolio'
        },
        {
            label: 'BLOG',
            href: 'https://blog.lemuellee.com'
        }
    ];

    $: baseRoute = $page.url.pathname.split('/')[1];

    function toggleDarkMode() {
        darkMode.set(!$darkMode);
        console.log($darkMode);
    }
    /**
     * @type {Document | null}
     */
    let doc = null;

    $: darkMode.subscribe((value) => {
        if (!doc) return;
        if (value) {
            doc.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            doc.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    });

    onMount(() => {
        doc = document;
        // if local storage has not been set, infer dark mode from system time
        if (localStorage.getItem('darkMode') === null) {
            const now = new Date();
            const hour = now.getHours();
            if (hour < 6 || hour >= 18) darkMode.set(true);
        }
        if (localStorage.getItem('darkMode') === 'true') darkMode.set(true);
    });

    let showMenu = false;
</script>

<header
    class="absolute flex h-10 w-full items-center justify-between gap-2 border-b bg-white px-4 dark:bg-zinc-900 sm:h-12 sm:px-8 md:justify-start"
>
    <button on:click={toggleDarkMode}>
        <img src="/favicon.png" class="h-8 w-8 hover:cursor-pointer" alt="" />
    </button>

    <div class="ml-1 text-xl font-extrabold">Lemuel Lee</div>
    <div class="mx-auto hidden md:block" />
    <button on:click={() => (showMenu = !showMenu)}>
        <BarsSolid class="h-6 w-6 hover:cursor-pointer md:hidden" />
    </button>

    <nav
        class="hidden justify-end gap-4 text-xs font-extrabold md:flex"
        data-sveltekit-preload-code="eager"
    >
        {#each routes as route}
            <a
                class="py-4 hover:text-orange-500"
                href={route.href}
                class:text-orange-500={route.href === '/' + baseRoute}
            >
                {route.label}
            </a>
        {/each}
    </nav>
</header>
<!-- Mobile Menu -->
<nav
    class="absolute right-0 top-12 z-10 flex flex-col gap-1 p-4 md:hidden"
    data-sveltekit-preload-code="eager"
    class:hidden={!showMenu}
>
    {#each routes as route}
        <a
            class="bg-zinc-100 py-2 pl-8 pr-4 text-right text-2xl font-bold hover:text-orange-500 dark:bg-zinc-700"
            href={route.href}
            class:text-orange-500={route.href === '/' + baseRoute}
            on:mouseup={() => (showMenu = !showMenu)}
        >
            {route.label}
        </a>
    {/each}
</nav>
