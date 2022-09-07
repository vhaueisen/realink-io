<script context="module">
	import QuoteForm from '$lib/Components/QuoteForm.svelte';
</script>

<svelte:head>
	<title>Realink — Fale Conosco</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<div>
		<h1>CONTATO</h1>
		<QuoteForm />
	</div>
</div>

<style>
	.content {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2em;
		height: 100%;
		align-items: center;
		z-index: 9;
	}

	.content div {
		z-index: 9;
		max-width: 490px;
		width: 100%;
		margin-left: auto;
	}

	/* responsiveness */
	@media (max-width: 800px) {
		.content {
			display: flex;
		}
		.content div {
			padding: 2em;
		}
	}
</style>
