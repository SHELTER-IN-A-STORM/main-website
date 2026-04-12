/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#f0f1fc',
					100: '#e4e5f9',
					200: '#cccef3',
					300: '#a9adeb',
					400: '#8488e0',
					DEFAULT: '#666ed8',
					light: '#8488e0',
					dark: '#4a52c9',
					600: '#4a52c9',
					700: '#3d44a8',
					800: '#333989',
					900: '#2d326e',
				},
				slate: {
					850: '#172033',
					950: '#0c1322',
				}
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
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
			borderRadius: {
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
				'glow': '0 0 20px rgba(102, 110, 216, 0.15)',
				'glow-lg': '0 0 40px rgba(102, 110, 216, 0.2)',
			},
			animation: {
				'bounce-slow': 'bounce 2s infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.8s ease-out',
				'slide-up-delay-1': 'slideUp 0.8s ease-out 0.2s both',
				'slide-up-delay-2': 'slideUp 0.8s ease-out 0.4s both',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'glow-soft': 'glowSoft 2s ease-in-out infinite alternate',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				glow: {
					'0%': { 'box-shadow': '0 0 20px rgb(50 56 153 / 0.3)' },
					'100%': { 'box-shadow': '0 0 30px rgb(50 56 153 / 0.6)' }
				},
				glowSoft: {
					'0%': { 'text-shadow': '0 0 10px rgba(102, 110, 216, 0.3)' },
					'100%': { 'text-shadow': '0 0 20px rgba(102, 110, 216, 0.6), 0 0 35px rgba(102, 110, 216, 0.4)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
