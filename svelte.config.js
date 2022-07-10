import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'src/app.html',
			precompress: false
		}),

		prerender: {
			default: true
		}
	},
	preprocess: sveltePreprocess(),
	experimental: {
		useVitePreprocess: true
	}
};

export default config;
