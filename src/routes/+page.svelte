<script>
  const title = "Realink — Início";
  let description =
    "Realink é um estúdio de jogos e desenvolvimento de software. Nós desenvolvemos experiências imersivas digitais para o seu negócio.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta
    rel="icon"
    type="image/png"
    href="https://realink.io/logo_preto_v.png"
  />
  <meta name="og:title" property="og:title" content={title} />
  <meta name="og:description" property="og:description" content={description} />
  <meta
    name="og:image"
    property="og:image"
    content="https://realink.io/logo_preto_v.png"
  />
</svelte:head>
