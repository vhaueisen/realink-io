<script lang="ts">
	import Button from '$lib/Components/Button.svelte';
	import ProductCarousel from '$lib/Components/Product/ProductCarousel.svelte';
	import Sidebar from '$lib/Components/Sidebar.svelte';
	import type { IProduct } from '$lib/models/IProduct';
	export let cards: string[];
	export let product: IProduct | undefined;
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';
	import type { ILink } from '$lib/Utils/Link';
	$: resolve = (link: ILink): string => '';

	onMount(async () => {
		const _module = await import('$lib/Utils/Link');
		resolve = _module.resolve;
	});
</script>

<article>
	<section>
		<ProductCarousel slides={product?.slides ? product?.slides : []} />
		<h2>{product?.title}</h2>
		<SvelteMarkdown source={product?.content} />
		<span>
			{#each product?.link ?? [] as l}
				<Button type="a" href={resolve(l)}>{l.text}</Button>
			{/each}
		</span>
		<div class="spacer">&nbsp;</div>
	</section>
	<Sidebar {cards} idx={product?.id} />
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: relative;
		overflow-y: auto;
		overflow-x: hidden;
		margin-bottom: 2em;
	}

	section {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
		max-width: 780px;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-top: 8em;
	}

	section::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	section h2 {
		margin-top: 2em;
	}

	/* section p {
		text-align: left;
		font: normal normal medium 20px/24px Lato;
		letter-spacing: 0px;
		color: #f3f9fc;
		opacity: 1;
	} */

	section span {
		margin: 2em 0 5em 0;
		flex-shrink: 1;
		align-self: flex-end;
	}

	section span :global(a) {
		margin: 0 0.5em;
	}

	.spacer {
		height: 5em;
	}

	@media (max-width: 1280px) {
		section {
			padding: 1em 2em 2em 2em;
			justify-content: flex-start;
			margin-top: 117px;
		}
		section h2 {
			margin-top: 3em;
		}
	}
</style>
