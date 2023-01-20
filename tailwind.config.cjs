/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			fontFamily: {
				'manrope': 'Manrope',
				'sofia': ['Sofia Sans', 'sans-serif']
      		},
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class'
};
