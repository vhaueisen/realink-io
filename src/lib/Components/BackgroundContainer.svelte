<script lang="ts">
	export let backdrop = false;
</script>

<main class="container">
	<div class="backdrop" class:active={backdrop}>
		<slot />
		<div />
	</div>
</main>

<style>
	main.container,
	.backdrop {
		margin: 0;
		padding: 0;
		max-height: 100%;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	main.container {
		background-image: url(../Assets/img/primary-background.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.backdrop {
		transition: background-color 0.3s ease-in-out;
	}

	.backdrop.active {
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
