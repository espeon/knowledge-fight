import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			'sans': ['DM Sans', 'sans-serif'],
			'mono': ['IBM Plex Mono', 'monospace'],
			'serif': ['Baskervville', 'serif'],
		  }
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
