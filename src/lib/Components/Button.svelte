<script lang="ts">
	export let type = 'button';
	export let href = '/';
	export let btnType = '';
	export let onclick: any = () => {};
</script>

<!-- if button -->
{#if type === 'button'}
	<button on:click={onclick} type={btnType}>
		<slot />
	</button>
{/if}
<!-- if a tag -->
{#if type === 'a'}
	<a {onclick} {href}>
		<slot />
	</a>
{/if}

<style>
	button,
	a {
		text-align: center;
		font: normal normal medium 30px/37px Overpass;
		letter-spacing: 4.8px;
		color: var(--pure-white);
		border: none;
		background: none;
		padding: 0.5em 1em;
		transition: color 0.3s ease-in-out;
		text-transform: uppercase;
		border: 4px solid transparent;
		background: linear-gradient(to right, black, black), var(--horizontal-gradient);
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;
		border-radius: 33px;
		text-decoration: none;
	}

	button:hover,
	a:hover {
		color: var(--active-color);
		text-decoration: none;
	}
</style>
