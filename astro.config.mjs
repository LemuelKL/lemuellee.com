import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    // add yur domain name here
    site: 'https://lemuellee.com',
    compressHTML: true,
    integrations: [sitemap(), mdx()],
    markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-black',
    },
  },
});
