/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'pop-in':
					'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards',
				'pulse-text': 'pulse-text 2s infinite',
				'slide-in-from-left':
					'slide-in-from-left 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
			},
			fontFamily: {
				caprasimo: ['Caprasimo', 'cursive'],
				'roboto-slab': ['Roboto Slab', 'sans-serif'],
			},
			backgroundImage: {
				mainBg: "radial-gradient(circle at top, rgba(241, 210, 70, 0.98),rgba(250, 176, 103, 0.87)),url('bg-pattern-dark.png');",
			},
			keyframes: {
				'slide-in-from-left': {
					'0%': { opacity: 0, transform: 'translateX(-30%)' },
					'100%': {
						opacity: 1,
						transform: 'translateX(0)',
					},
				},
				'pulse-text': {
					'0%': {
						color: '#e1dec7',
					},
					'50%': {
						color: '#9f9d83',
					},
					'100%': {
						color: '#e1dec7',
					},
				},
				pulse: {
					'0%': {
						'border-color': '#f6e35a',
						'box-shadow': '0 0 0 0 rgba(246, 227, 90, 0.4)',
					},
					'50%': {
						'border-color': '#f8c031',
						'box-shadow': '0 0 0 0.5rem rgba(248, 165, 49, 0)',
					},
					'100%': {
						'border-color': '#f6e35a',
						'box-shadow': '0 0 0 0 rgba(246, 227, 90, 0)',
					},
				},
				'pop-in': {
					'0%': {
						transform: 'scale(0)',
						opacity: 0,
					},
					'80%': {
						transform: 'scale(1.1)',
						opacity: 1,
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
			},
		},
	},
	plugins: [],
};
