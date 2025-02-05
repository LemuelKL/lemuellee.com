<script lang="ts">
    import * as Flag from 'svelte-flag-icons';
    import { GithubBrands, LinkedinInBrands, YoutubeBrands } from 'svelte-awesome-icons';

    import avatar from '$lib/assets/lemuel-casual.webp';

    const location = 'London';
    const phone = '+44 7597 243186';
    const email = 'lemuellee.kl@gmail.com';

    const Flag_GB = $derived(Flag['Gb']);
    const Flag_HK = $derived(Flag['Hk']);
    const Flag_TW = $derived(Flag['Tw']);
    const Flag_CN = $derived(Flag['Cn']);
</script>

<svelte:head>
    <title>About - Lemuel Lee</title>
    <meta name="description" content="Lemuel. GitHub | LinkedIn | YouTube" />
</svelte:head>

<div class="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-8">
    <img
        src={avatar}
        class="max-w-[12em] rounded-full border-4 border-gray-200 object-cover shadow-lg dark:border-gray-800 sm:max-w-[14em] md:h-auto"
        alt=""
    />
    <div class="flex space-x-2 p-4 text-2xl">
        <Flag_GB class="w-8" />
        <Flag_HK class="w-8" />
        <Flag_TW class="w-8" />
        <Flag_CN class="w-8" />
    </div>
    <div class="flex w-full justify-center px-8">
        <div>
            Born in Hong Kong,<br class="block sm:hidden" /> speaks English, Cantonese, Mandarin.<br
            />BEng CompSc HKU<br />Studied and worked in London and Hong Kong.
        </div>
    </div>
    <div class="h-0.5 w-4/6 bg-gray-200 dark:bg-gray-800"></div>
    <div class="h-22 flex w-full items-center justify-center gap-4 px-2 md:gap-8 md:px-8">
        <div class="hidden flex-col items-center sm:flex">
            <div class="font-bold">Based at</div>
            <div>{location}</div>
        </div>
        <div class="hidden flex-col items-center sm:flex">
            <div class="font-bold">Call / Text</div>
            <div>{phone}</div>
        </div>
        <div class="hidden flex-col items-center sm:flex">
            <div class="font-bold">Write</div>
            <div>{email}</div>
        </div>
        <div class="flex flex-col sm:hidden">
            <div>{phone}</div>
            <div>{email}</div>
        </div>
        <div class="flex items-center gap-2">
            <a href="https://www.github.com/LemuelKL" target="_blank" rel="noreferrer">
                <GithubBrands
                    class="h-8 w-8 hover:cursor-pointer hover:text-gray-700 dark:text-gray-200 hover:dark:text-white sm:h-12 sm:w-12"
                />
            </a>
            <a href="https://www.linkedin.com/in/lemuelkl/" target="_blank" rel="noreferrer">
                <LinkedinInBrands
                    class="h-8 w-8 text-blue-900 hover:cursor-pointer hover:text-blue-700 sm:h-12 sm:w-12"
                />
            </a>
            <a href="https://www.youtube.com/c/Luv2049" target="_blank" rel="noreferrer">
                <YoutubeBrands
                    class="h-8 w-8 text-red-900 hover:cursor-pointer hover:text-red-700 sm:h-12 sm:w-12"
                />
            </a>
        </div>
    </div>
</div>
