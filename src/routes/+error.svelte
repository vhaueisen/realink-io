<script context="module" lang="ts">
	export function load({ error, status }: any) {
		return {
			props: {
				status // same as status: status
			}
		};
	}
</script>

<script lang="ts">
	import Button from '$lib/Components/Button.svelte';
	export let status: string = '';
</script>

<div class="content">
	<h1>{status}</h1>
	<p>Ooops... Parece que você está perdido.</p>
	<div class="btn-row">
		<Button type="a" href="javascript:history.back()">Voltar</Button>
		<div class="spacer" />
		<Button type="a" href="/">Início</Button>
	</div>
</div>

<style>
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content > * {
		margin-top: 1em;
		text-align: center;
	}

	.btn-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		z-index: 9;
	}

	.content {
		background-color: rgba(0, 0, 0, 0.7);
	}

	.spacer {
		width: 2em;
	}
</style>
