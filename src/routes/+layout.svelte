<script lang="ts">
  import BackgroundContainer from "$lib/Components/BackgroundContainer.svelte";
  import Navbar from "$lib/Components/Navbar.svelte";
  import { page } from "$app/stores";
  import "../app.css";
  const author = "Realink";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.png" />
  <link
    href="https://fonts.googleapis.com/css?family=Overpass"
    rel="stylesheet"
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content={author} />
  <meta name="type" content="website" />
  <meta name="og:type" property="og:type" content="website" />
  <meta property="og:site_name" content={author} />
  <meta property="og:locale" content="pt_BR" />
</svelte:head>

<Navbar />
<BackgroundContainer
  backdrop={$page.url.pathname.includes("metaverse") ||
    $page.url.pathname.includes("games") ||
    $page.url.pathname.includes("privacy-policy")}
>
  <div class="full-wh">
    <div class="bg-animation">
      <div class="stars" />
      <div class="stars1" />
    </div>
  </div>
  <slot />
</BackgroundContainer>

<style>
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
