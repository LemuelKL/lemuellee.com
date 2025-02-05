/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts,svx}'],
    theme: {
        extend: {
            animation: {
                text: 'text 5s ease infinite'
            }
        }
    },
    // plugins: [require('@tailwindcss/typography')],
    darkMode: 'class'
};
