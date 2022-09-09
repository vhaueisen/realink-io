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
	<div class="full-wh">
		<!-- STAR ANIMATION -->
		<div class="bg-animation">
			<div class="stars" />
			<div class="stars1" />
		</div>
		<!-- / STAR ANIMATION -->
	</div>
	<slot />
</BackgroundContainer>

<!-- <footer>
	<p>Copyright 2020 — {year} por <a href="https://Realink.io">Realink</a>. Todos os direitos reservados.</p>
</footer> -->
<style>
	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 0.5em 0;
		width: 100%;
		background: transparent;
		z-index: 10;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
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
	} */

	/* Hide scrollbar for Chrome, Safari and Opera */
	.full-wh::-webkit-scrollbar {
		display: none;
	}

	.full-wh {
		position: absolute;
		top: 80px;
		left: 0px;
		bottom: 0px;
		width: 100%;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.bg-animation {
		position: fixed;
		top: -8500px;
		left: -8000px;
		width: 100%;
		height: 100%;
	}

	.stars {
		position: fixed;
		top: -5000px;
		left: -5000px;
		width: 20000px;
		height: 20000px;
		background-repeat: repeat;
		animation: Odd 150s linear infinite;
		opacity: 0.05;
		background-image: url(/background/Dust1.png);
	}

	.stars1 {
		position: fixed;
		top: -5000px;
		left: -5000px;
		width: 20000px;
		height: 20000px;
		background-repeat: repeat;
		animation: Even 80s linear infinite;
		opacity: 0.07;
		background-image: url(/background/Dust2.png);
	}

	@keyframes Odd {
		from {
			transform: translate(0px, 0px);
		}
		to {
			transform: translate(-1000px, 1200px);
		}
	}

	@keyframes Even {
		from {
			transform: translate(0px, 0px);
		}
		to {
			transform: translate(1250px, 1000px);
		}
	}
</style>
