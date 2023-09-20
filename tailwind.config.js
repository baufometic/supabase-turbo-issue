import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./ui/**/*.{js,ts,jsx,tsx,mdx}"
	],
	darkMode : [ "class" ],
	plugins  : [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		plugin(function({ addUtilities }) {
			addUtilities({
				".hide-scrollbars": {
					"scrollbar-width"      : "none",
					"&::-webkit-scrollbar" : {
						"display": "none"
					},
					"-ms-overflow-style": "none"
				}
			});
		}),
		require("tailwindcss-3d")
	],
	theme: {
		container: {
			center  : true,
			padding : "2rem",
			screens : {
				"2xl": "1400px"
			}
		},
		extend: {
			animation: {
				"accordion-down" : "accordion-down 0.2s ease-out",
				"accordion-up"   : "accordion-up 0.2s ease-out"
			},
			borderRadius: {
				lg : "var(--radius)",
				md : "calc(var(--radius) - 2px)",
				sm : "calc(var(--radius) - 4px)"
			},
			colors: {
				border     : "rgb(var(--border))",
				input      : "rgb(var(--input))",
				ring       : "rgb(var(--ring))",
				background : "rgb(var(--background))",
				foreground : "rgb(var(--foreground))",
				primary    : {
					DEFAULT    : "rgb(var(--primary))",
					foreground : "rgb(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT    : "rgb(var(--secondary))",
					foreground : "rgb(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT    : "rgb(var(--destructive))",
					foreground : "rgb(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT    : "rgb(var(--muted))",
					foreground : "rgb(var(--muted-foreground))"
				},
				accent: {
					DEFAULT    : "rgb(var(--accent))",
					foreground : "rgb(var(--accent-foreground))"
				},
				popover: {
					DEFAULT    : "rgb(var(--popover))",
					foreground : "rgb(var(--popover-foreground))"
				},
				card: {
					DEFAULT    : "rgb(var(--card))",
					foreground : "rgb(var(--card-foreground))"
				}
			},
			fontFamily: {
				main : [ "var(--fontAudiowide)" ],
				sans : [ "var(--font-sans)", ...fontFamily.sans ]
			},
			spacing: {
				"headerHeight": "55px"
			},
			keyframes: {
				"loadingspinner-1": {
					"0%": {
						left: "-100%"
					},
					"50%, 100%": {
						left: "100%"
					}
				},
				"loadingspinner-2": {
					"0%": {
						top: "-100%"
					},
					"50%, 100%": {
						top: "100%"
					}
				},
				"loadingspinner-3": {
					"0%": {
						right: "-100%"
					},
					"50%, 100%": {
						right: "100%"
					}
				},
				"loadingspinner-4": {
					"0%": {
						bottom: "-100%"
					},
					"50%, 100%": {
						bottom: "100%"
					}
				},

				"accordion-down": {
					from: {
						height: "0"
					},
					to: {
						height: "var(--radix-accordion-content-height)" 
					}
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)" 
					},
					to: {
						height: "0"
					}
				},
				"dropdown-menu-effect": {
					from: {
						height : 0,
						width  : 0
					},
					to: {
						height : "100%",
						width  : "100%"
					}
				},
				"dots-for-synthwave": {
					from: {
						top: "full"
					},
					to: {
						top: "0"
					}
				},
				"hue-rotate-nav": {
					from: {
						filter: "hue-rotate(0)"
					},
					to: {
						filter: "hue-rotate(360deg)"
					}
				},
				"fade-in": {
					from: {
						opacity: 0
					},
					to: {
						opacity: 1
					}
				}
			}
		}
	}
};
