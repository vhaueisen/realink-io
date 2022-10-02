<script lang="ts">
	import ProductContent from '$lib/Components/Product/ProductContent.svelte';
	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<svelte:head>
	<title>Realink — Games</title>
	<meta name="description" content="Our Games" />
</svelte:head>
{#if data}
	<ProductContent cards={data?.cards} product={data?.content} />
{/if}
