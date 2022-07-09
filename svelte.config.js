import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess(),
	experimental: {
		useVitePreprocess: true
	}
};

export default config;
