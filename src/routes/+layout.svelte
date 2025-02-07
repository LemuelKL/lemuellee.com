<script lang="ts">
    import './../app.css';
    import NavBar from './NavBar.svelte';
    import { darkMode } from './../stores';
    interface Props {
        children?: typeof import('svelte').SvelteComponent;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <meta name="theme-color" content={$darkMode ? '#18181B' : '#FFFFFF'} />
</svelte:head>

<div class="static h-auto w-screen overflow-hidden">
    <NavBar />
    <main
        class="absolute top-10 h-[calc(100%-40px)] w-full overflow-hidden text-zinc-800 sm:top-12 sm:h-[calc(100%-48px)] dark:text-zinc-200 dark:bg-zinc-800 bg-zinc-100"
    >
        {@render children?.()}
    </main>
</div>
