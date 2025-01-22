/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
				}
			},
			keyframes: {
				'shine': {
					'0%': { 'background-position': '-200% 0' },
					'100%': { 'background-position': '200% 0' },
				},
				'wave': {
					'0%': { 'clip-path': 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)' },
					'50%': { 'clip-path': 'polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)' },
					'100%': { 'clip-path': 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)' }
				},
				'bouncy-reveal': {
					'0%': { 'clip-path': 'circle(0.0% at 50% 50%)' },
					'20%': { 'clip-path': 'circle(15.0% at 50% 50%)' },
					'40%': { 'clip-path': 'circle(10.0% at 50% 50%)' },
					'60%': { 'clip-path': 'circle(40.0% at 50% 50%)' },
					'80%': { 'clip-path': 'circle(20.0% at 50% 50%)' },
					'100%': { 'clip-path': 'circle(100.0% at 50% 50%)' }
				},
				'clip-animation-1': {
					'0%': { 'clip-path': 'circle(18.0% at 21% 23%)' },
					'17%': { 'clip-path': 'circle(18.0% at 77% 50%)' },
					'34%': { 'clip-path': 'circle(18.0% at 27% 74%)' },
					'51%': { 'clip-path': 'circle(18.0% at 71% 74%)' },
					'68%': { 'clip-path': 'circle(18.0% at 25% 46%)' },
					'85%': { 'clip-path': 'circle(18.0% at 76% 23%)' },
					'100%': { 'clip-path': 'circle(18.0% at 21% 23%)' }
				},
				'clip-animation-2': {
					'0%': { 'clip-path': 'circle(18.0% at 21% 23%)' },
					'17%': { 'clip-path': 'circle(18.0% at 77% 50%)' },
					'34%': { 'clip-path': 'circle(18.0% at 27% 74%)' },
					'51%': { 'clip-path': 'circle(18.0% at 71% 74%)' },
					'68%': { 'clip-path': 'circle(18.0% at 51% 50%)' },
					'100%': { 'clip-path': 'circle(70.7% at 50% 50%)' }
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shine': 'shine 5s linear infinite',
				'wave': 'wave 4s ease-in-out infinite',
				'bouncy-reveal': 'bouncy-reveal 4s ease-in-out infinite',
				'clip-animation-1': 'clip-animation-1 infinite 10s linear',
				'clip-animation-2': 'clip-animation-2 infinite 10s linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

