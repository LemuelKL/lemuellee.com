import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';
import tsEslintParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';
export default [
    ...eslintPluginSvelte.configs['flat/recommended'],
    {
        ignores: ['.svelte-kit/']
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsEslintParser
        }
    },
    {
        ignores: [
            'app.d.ts',
            '**/+server.ts',
            '.DS_Store',
            'node_modules/',
            '/build',
            '/.svelte-kit',
            'package-lock.json'
        ],
        files: ['src/routes/**/*.svelte', 'src/routes/**/*.ts'],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                svelteConfig,
                project: './tsconfig.json',
                extraFileExtensions: ['.svelte'],
                parser: tsEslintParser
            }
        }
    }
];
