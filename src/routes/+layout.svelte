<script lang="ts">
  import BackgroundContainer from "$lib/Components/BackgroundContainer.svelte";
  import Navbar from "$lib/Components/Navbar.svelte";
  import { page } from "$app/stores";
  import "../app.css";
  const author = "Rogue Unit";
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
  backdrop={$page.url.pathname.includes("experiences") ||
    $page.url.pathname.includes("games") ||
    $page.url.pathname.includes("privacy-policy") ||
    $page.url.pathname.includes("/r") ||
    $page.url.pathname.includes("content")}
>
  <div class="full-wh">
    <!-- background video here -->
    <video
      autoplay
      muted
      loop
      class="bg-animation"
      src="/background/background.mp4"
    />
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
