/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'slide-in-from-bottom': 'slide-in-from-bottom 0.7s ease-out',
			},
			backgroundImage: {
				custom: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237616DD'/%3E%3Cstop offset='1' stop-color='%231D0433'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%2318E0FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2318E0FF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E\")",
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
			},
			keyframes: {
				'slide-in-from-bottom': {
					'0%': { opacity: 0, transform: 'translateY(10%)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};