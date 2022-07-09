<div id="nc-main" class="nc-main bg-cover bg-cc">
	<div class="full-wh">
		<!-- STAR ANIMATION -->
		<div class="bg-animation">
			<div class="stars" />
			<div class="stars1" />
		</div>
		<!-- / STAR ANIMATION -->
	</div>
</div>
<svelte:head>
	<title>Realink — Home</title>
	<meta name="description" content="Realink.io's homepage." />
</svelte:head>

<style>
	#nc-main {
		position: relative;
		height: 100vh;
		overflow-x: hidden;
		-webkit-box-shadow: 0 0 30px #241d20;
		box-shadow: 0 0 30px #241d20;
		-webkit-transition: -webkit-transform 0.4s;
		transition: -webkit-transform 0.4s;
		transition: transform 0.4s;
		transition: transform 0.4s, -webkit-transform 0.4s;
	}

	.full-wh {
		position: absolute;
		top: 80px;
		left: 0px;
		bottom: 0px;
		width: 100%;
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
		opacity: 0.075;
		background: url('https://image.ibb.co/goU1Uv/dust2.jpg');
		mix-blend-mode: screen;
	}

	.stars1 {
		position: fixed;
		top: -5000px;
		left: -5000px;
		width: 20000px;
		height: 20000px;
		background-repeat: repeat;
		animation: Even 80s linear infinite;
		opacity: 0.1;
		background: url('https://image.ibb.co/jcTvpv/dust1.jpg');
		mix-blend-mode: screen;
	}

	@keyframes Odd {
		from {
			transform: translate(0px, 0px);
		}
		to {
			transform: translate(0px, 2000px);
		}
	}

	@keyframes Even {
		from {
			transform: translate(0px, 0px);
		}
		to {
			transform: translate(2000px, 2000px);
		}
	}
</style>
