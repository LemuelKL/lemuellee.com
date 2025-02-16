/** @type {import("prettier").Config} */
export default {
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'none',
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ]
};
