<script lang="ts">
    import './../app.css';
    import NavBar from './NavBar.svelte';
    import { darkMode } from './../stores';
</script>

<svelte:head>
    <meta name="theme-color" content={$darkMode ? '#18181B' : '#FFFFFF'} />
</svelte:head>

<div class="static h-auto w-screen overflow-hidden">
    <NavBar />
    <main
        class="absolute top-10 h-[calc(100%-40px)] w-full overflow-hidden sm:top-12 sm:h-[calc(100%-48px)]"
    >
        <slot />
    </main>
</div>
