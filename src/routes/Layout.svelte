<script>
	export let bgImgUrl = '/wallhaven-zx5qzj_2560x1440.png';
	$: bgImg = `background-image: url("${bgImgUrl}");`;
</script>

<div class="h-full flex flex-col items-center divide-y-8">
	<div class="bg-img w-full h-2/6 md:px-12 sm:px-4 px-2 flex flex-col" style={bgImg}>
		<div
			class="outline bg-white bg-opacity-40 h-1/2 my-auto flex items-center w-full justify-between"
		>
			<div class="basis-1/3 flex-none flex justify-center"><slot name="banner-left" /></div>
			<div class="basis-1/3 flex-none flex justify-center"><slot name="banner-center" /></div>
			<div class="basis-1/3 flex-none flex justify-center"><slot name="banner-right" /></div>
		</div>
	</div>
	<div class="w-full max-w-5xl h-4/6 overflow-y-scroll">
		<slot name="content" />
	</div>
</div>

<style>
	.bg-img {
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
