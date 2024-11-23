/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				'color-1': 'hsl(var(--color-1))',
				'color-2': 'hsl(var(--color-2))',
				'color-3': 'hsl(var(--color-3))',
				'color-4': 'hsl(var(--color-4))',
				'color-5': 'hsl(var(--color-5))',
				grayDark: {
					'50': '#f5f6f6',
					'100': '#e5e7e8',
					'200': '#cdd0d4',
					'300': '#abb0b5',
					'400': '#808890',
					'500': '#656c75',
					'600': '#4c5256',
					'700': '#41454b',
					'800': '#18191b',
					'900': '#161719',
					'950': '#0d0e0f',
				},


			}, 
			backgroundImage: {
				'search-g-dark': 'linear-gradient(to right,#ab9374, #ff001f, #a744ff, #ff4444)',
				'search-g-light': 'linear-gradient(to right, #74ab9c, #ffbf00, #a744ff, #ff4444)',
				'banner-g-light': 'linear-gradient(110deg, #00a87b, #ffa100, #cf00ae, #ff4444)',
				'banner-g-dark': 'linear-gradient(110deg, #ee3e73, #0b1447, #000)',
				'banner-g-light-mobile': 'radial-gradient( #00a87b, #ffa100, #cf00ae, #ff4444)',
				'banner-g-dark-mobile': 'radial-gradient( #ee3e73, #0b1447, #000)'
			},
		},
	},
	plugins: [],
}

