/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'slide-down-fade-in':
					'slide-down-fade-in 0.3s ease-out forwards',
				'slide-up-fade-in': 'slide-up-fade-in 0.3s ease-out forwards',
			},
			fontFamily: {
				'bricolage-grotesque': ['Bricolage Grotesque', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
			},
			keyframes: {
				'slide-down-fade-in': {
					'0%': { opacity: 0, transform: 'translateY(-3rem)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				'slide-up-fade-in': {
					'0%': { opacity: 0, transform: 'translateY(3rem)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};
