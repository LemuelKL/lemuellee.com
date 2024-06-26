/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts,svx}'],
    theme: {
        extend: {
            fontFamily: {
                manrope: 'Manrope',
                sofia: ['Sofia Sans', 'sans-serif']
            },
            animation: {
                text: 'text 5s ease infinite'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class'
};
