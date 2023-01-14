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
</script>

<div class="h-full border-b-4">
	{#each wallpapers as wallpaper}
		{#if $page.url.pathname === wallpaper.route}
			<div
				class="h-full bg-center bg-cover"
				style="background-image: url(/wallpaper/{wallpaper.uri})"
			/>
		{/if}
	{/each}
</div>
