/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#4B3013",
				secondary: "#d87c84",
				tertiary: "#d87c84",
				"primary-mono": "#F6CBCB",
				"secondary-mono": "#F6CBCB",
				"tertiary-mono": "#F6CBCB",
			},
			fontFamily: {
				primary: ["Indie Flower", ...defaultTheme.fontFamily.sans],
				secondary: ["Rancho", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
