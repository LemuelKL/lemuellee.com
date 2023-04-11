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
			},
			backgroundImage: {
				'polka-light': 'radial-gradient(#000000 0.5px, transparent 0.5px)',
				'polka-dark': 'radial-gradient(#4a4a4a 0.5px, transparent 0.5px)'
			},
			backgroundSize: {
				polka: '12px 12px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class'
};
