<script lang="ts">
    import { page } from '$app/stores';
    const wallpapers = [
        {
            route: '/',
            uri: '/wallhaven-zx5qzj_2560x1440.png'
        },
        {
            route: '/contact',
            uri: 'Fq14Fsk.jpeg'
        },
        {
            route: '/projects',
            uri: '/14961556102_13f1b039b4_o.jpg'
        },
        {
            route: '/blog',
            uri: '/121134.jpg'
        }
    ];
    let baseRoute = $derived('/' + $page.url.pathname.split('/')[1]);
    let currentWallpaper = $derived(wallpapers.find((wallpaper) => wallpaper.route === baseRoute));
</script>

<div class="h-full border-b-2 dark:border-black">
    <div
        class="h-full bg-cover bg-center"
        style="background-image: url(/wallpaper/{currentWallpaper
            ? currentWallpaper.uri
            : 'eagle-3840x2160.jpg'})"
></div>
</div>
