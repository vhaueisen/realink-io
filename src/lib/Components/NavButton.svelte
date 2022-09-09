<script lang="ts">
	import { page } from '$app/stores';

	export let name: string;
	export let to: string = '/';
	export let onClick: () => void = () => {};
</script>

<a
	on:click={onClick}
	href={to}
	class:active={to === '/'
		? $page.url.pathname === '/'
		: $page.url.pathname.includes(to.slice(0, -1))}
>
	{name}
</a>

<style>
	a {
		text-align: left;
		font-weight: 500;
		font-family: Overpass;
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

	@media (max-width: 1280px) {
		a {
			padding: 1em 0;
		}
	}
</style>
