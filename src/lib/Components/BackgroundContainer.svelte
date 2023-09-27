<script lang="ts">
  export let backdrop = false;
</script>

<main class="container">
  <video autoplay={true} loop={true} muted={true}>
    <source src="/background/background.mp4" type="video/mp4" />
    <track kind="captions" />
  </video>

  <div class="backdrop" class:active={backdrop} style="overflow: hidden">
    <slot />
    <div />
  </div>
</main>

<style>
  main video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  main.container,
  .backdrop {
    margin: 0;
    padding: 0;
    max-height: 100%;
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  main.container {
    /* background-image: url(/background/primary-background.jpg); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .backdrop {
    transition: background-color 0.3s ease-in-out;
  }

  .backdrop.active {
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
