<script lang="ts">
	import BackgroundContainer from '$lib/Components/BackgroundContainer.svelte';
	import Navbar from '$lib/Components/Navbar.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	const year = new Date().getFullYear();
</script>

<Navbar />

<BackgroundContainer
	backdrop={$page.url.pathname.includes('metaverse') || $page.url.pathname.includes('games')}
>
	<slot />
</BackgroundContainer>

<footer>
	<p>Copyright 2020 — {year} by <a href="https://Realink.io">Realink</a>. All Rights Reserved.</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 0.5em 0;
		width: 100%;
		background: transparent;
	}

	footer a {
		font-weight: bold;
	}

	footer p {
		margin: 0;
		margin-right: auto;
		padding-left: 1em;
	}

	@media (max-width: 768px) {
		footer {
			padding: 0;
			text-overflow: clip;
		}

		footer p {
			margin: 0.2em auto 0 0;
			font-size: 10pt;
		}
	}
</style>
