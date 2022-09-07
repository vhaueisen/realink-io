<script context="module" lang="ts">
	import Button from '$lib/Components/Button.svelte';
</script>

<form>
	<!-- Company name input -->
	<div class="form-group">
		<input
			type="text"
			class="form-control"
			id="companyName"
			placeholder="Nome da companhia"
			required
		/>
	</div>

	<!-- email input -->
	<div class="form-group">
		<input type="email" class="form-control" id="email" placeholder="Email" required />
	</div>

	<!-- message input -->
	<div class="form-group">
		<textarea class="form-control" id="message" rows="9" placeholder="Mensagem..." required />
	</div>

	<!-- send button -->
	<div class="form-footer">
		<Button type="submit">Send</Button>
	</div>
</form>

<style>
	.form-group {
		margin-bottom: 1rem;
		border: 7px solid transparent;
		border-image-slice: 1;
		border-width: 4px;
		border-image-source: var(--horizontal-gradient);
		padding: 0.5em;
		background: black;
	}

	.form-group input,
	.form-group textarea {
		font: normal normal normal 20px/26px Overpass;
		color: var(--active-color);
		text-decoration: none;
		border: none;
		background: black;
		width: 100%;
		resize: none;
	}
	*:focus {
		outline: none;
	}

	.form-footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
	}
</style>
