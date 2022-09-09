<script lang="ts">
	export let slides: string[] = [];
	$: onNext = false;
	$: onPrev = false;
	$: idx = 0;

	const next = () => {
		if (onPrev || onNext) return;
		// shif array items to the right
		onPrev = true;
		setTimeout(() => {
			if (idx <= 0) idx = slides.length - 1;
			else idx--;
			onPrev = false;
		}, 500);
	};

	const prev = () => {
		if (onPrev || onNext) return;
		// shift items to the left
		onNext = true;
		setTimeout(() => {
			if (idx >= slides.length - 1) idx = 0;
			else idx++;
			onNext = false;
		}, 500);
	};
</script>

<div id="slider" style="transform: rotateY(0deg) translateX(-{(slides.length - 1) * 2.5}%);">
	<div class="wrap">
		<div id="slider">
			{#each slides as slide, i}
				<div
					class="item"
					class:next={onNext}
					class:prev={onPrev}
					class:animating={onPrev || onNext}
					class:first={i === 0}
					class:last={i === slides.length - 1}
					style="
                            background-image: url({slides[(idx + i) % slides.length]});
                            z-index: {onNext && i === 0
						? 0
						: slides.length - i + (onNext ? 1 : onPrev ? -1 : 0)};
                            transform: rotateY(0deg) translateX({(i -
						(onNext && i === 0 ? -slides.length + 1 : onNext ? 1 : onPrev ? -1 : 0)) *
						10}%)
                        "
				/>
			{/each}
		</div>

		<span id="next" on:click={prev}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
				<defs>
					<style>
						.cls-1 {
							fill: none;
							stroke: var(--pure-white);
							stroke-miterlimit: 10;
							stroke-width: 7px;
							transition: stroke 0.3s ease-in-out;
						}

						#next:hover .cls-1 {
							stroke: var(--active-color);
						}
					</style>
				</defs>
				<path
					id="Rectangle_Path"
					class="cls-1"
					d="M32.246,0V33.178L0,31.953"
					transform="translate(0.094 25.276) rotate(-45)"
				/>
			</svg>
		</span>

		<span id="prev" on:click={next}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
				<defs>
					<style>
						.cls-1 {
							fill: none;
							stroke: var(--pure-white);
							stroke-miterlimit: 10;
							stroke-width: 7px;
							transition: stroke 0.3s ease-in-out;
						}

						#prev:hover .cls-1 {
							stroke: var(--active-color);
						}
					</style>
				</defs>
				<path
					id="Rectangle_Path"
					class="cls-1"
					d="M32.246,0V33.178L0,31.953"
					transform="translate(0.094 25.276) rotate(-45)"
				/>
			</svg>
		</span>
	</div>
</div>

<style>
	#slider {
		width: 100%;
	}
	.wrap {
		margin: 0 auto;
		position: relative;
		perspective: 1000px;
		height: 100%;
	}

	.item {
		display: block;
		position: absolute;
		text-align: center;
		color: #fff;
		border-radius: 10px;
		height: 100%;
		box-shadow: 0px 10px 99px #00000052;
		border-radius: 12px;
	}

	.item.animating {
		transition: transform 500ms ease-in-out, z-index 600ms linear;
	}

	.item.prev.last {
		z-index: 11 !important;
		transform: rotateY(0deg) translateX(0%) !important;
	}

	#next,
	#prev {
		position: absolute;
		top: 50%;
		margin-top: -1em;
		right: 16%;
		height: 33px;
		width: 33px;
		z-index: 10;
		cursor: pointer;
	}

	#slider {
		height: 390px;
	}

	#prev {
		left: 1em;
		transform: rotate(180deg);
	}

	.item {
		width: 85%;
	}

	.item {
		display: flex;
		align-items: center;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 10px;
		overflow: hidden;
	}

	/* #slider .item.first:not(.animating),
	#slider .item.last.animating {
		border: 3px solid rgb(64, 64, 64);
	} */

	#slider .item:hover:not(:first-child) {
		cursor: pointer;
	}

	#slider .item {
		box-shadow: 8px 4px 6px 0px #00000052;
	}

	@media (max-width: 1280px) {
		/* #slider .item.first:not(.animating),
		#slider .item.last.animating {
			border: 1px solid rgb(64, 64, 64);
		} */

		#slider {
			margin-top: 40px;
			height: auto;
		}

		#prev {
			left: 1em;
		}
		#next {
			right: 3.75em;
		}

		.wrap {
			margin: 1em;
			height: 42vw;
		}
	}
</style>
