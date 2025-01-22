/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#666ed8',
					light: '#7c83df',
					dark: '#5059c8',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				handwriting: ['"Gochi Hand"', 'cursive']
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			animation: {
				'bounce-slow': 'bounce 2s infinite',
				'fade-in': 'fadeIn 1s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'slide-up-delay-1': 'slideUp 0.8s ease-out 0.2s',
				'slide-up-delay-2': 'slideUp 0.8s ease-out 0.4s',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				glow: {
					'0%': { 'box-shadow': '0 0 20px rgb(50 56 153 / 0.3)' },
					'100%': { 'box-shadow': '0 0 30px rgb(50 56 153 / 0.6)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
} 