import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Casino-specific colors
				'casino-gold': 'hsl(var(--casino-gold))',
				'casino-red': 'hsl(var(--casino-red))',
				'casino-green': 'hsl(var(--casino-green))',
				'casino-black': 'hsl(var(--casino-black))',
				'casino-white': 'hsl(var(--casino-white))',
				'casino-silver': 'hsl(var(--casino-silver))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.8)'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spin-roulette': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'casino-flash': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(51 100% 50% / 0.4)'
					},
					'25%': {
						boxShadow: '0 0 40px hsl(51 100% 50% / 0.8), 0 0 60px hsl(0 100% 50% / 0.4)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(51 100% 50% / 1), 0 0 80px hsl(0 100% 50% / 0.6)'
					},
					'75%': {
						boxShadow: '0 0 40px hsl(51 100% 50% / 0.8), 0 0 60px hsl(0 100% 50% / 0.4)'
					}
				},
				'chip-bounce': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-5px) rotate(5deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-5px) rotate(-5deg)'
					}
				},
				'slot-spin': {
					'0%': { transform: 'rotateY(0deg)' },
					'50%': { transform: 'rotateY(180deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'spin-roulette': 'spin-roulette 2s linear infinite',
				'casino-flash': 'casino-flash 1.5s ease-in-out infinite',
				'chip-bounce': 'chip-bounce 0.8s ease-in-out',
				'slot-spin': 'slot-spin 1s ease-in-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-casino': 'radial-gradient(ellipse at center, hsl(0 50% 8%), hsl(0 100% 3%))',
				'gradient-felt': 'linear-gradient(145deg, hsl(120 50% 8%), hsl(120 40% 12%))',
				'gradient-chip': 'linear-gradient(145deg, hsl(51 100% 50%), hsl(0 100% 50%))',
				'glass-effect': 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
