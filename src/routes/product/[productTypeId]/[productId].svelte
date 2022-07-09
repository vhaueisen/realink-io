<script lang="ts">
	import ProductContent from '$lib/Components/Product/ProductContent.svelte';
	import type { IProductResponse } from '$lib/database';
	export let item: IProductResponse;
</script>

<svelte:head>
	<title>Realink — Games</title>
	<meta name="description" content="Our Games" />
</svelte:head>
{#if item}
	<ProductContent cards={item.cards} product={item?.content} />
{/if}
