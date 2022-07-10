import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			envPrefix: ''
		})
	},
	prerender: {
		default: true
	},
	preprocess: sveltePreprocess(),
	experimental: {
		useVitePreprocess: true
	}
};

export default config;
