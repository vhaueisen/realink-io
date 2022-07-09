<script lang="ts">
	import { page } from '$app/stores';

	export let name: string;
	export let to: string = '/';
</script>

<a href={to} class:active={$page.url.pathname === to}>
	{name}
</a>

<style>
	a {
		text-align: left;
		font: normal normal medium 25px / 32px Overpass;
		letter-spacing: 4px;
		color: var(--pure-white);
		opacity: 1;
		border: none;
		background: none;
		padding: 1em;
		margin: 0 2em;
		transition: color 0.3s ease-in-out;
		border-bottom: 7px solid transparent;
		border-image-slice: 1;
		border-width: 7px;
		text-transform: uppercase;
	}

	a:hover,
	a.active {
		color: var(--active-color);
		border-image-source: var(--horizontal-gradient);
		text-decoration: none;
	}
</style>
