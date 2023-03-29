<script>
  import QuoteForm from "$lib/Components/QuoteForm.svelte";
  /** @type {import('./$types').ActionData} */
  export let form;
  const title = "Realink — Contato";
  let description =
    "Entre em contato conosco para saber mais sobre nossos serviços.";
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

<div class="content">
  <article>
    <div>
      <h1>CONTATO</h1>
      {#if !(form?.success || form?.error)}
        <QuoteForm />
      {/if}
      {#if form?.success}
        <p>Seu contato foi enviado e logo será tratado por nossa equipe!</p>
      {/if}
      {#if form?.error}
        <p>
          {form?.error}
        </p>
      {/if}
    </div>
  </article>
</div>

<style>
  .content {
    width: 100%;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    height: 100%;
    align-items: center;
    z-index: 9;
    margin-top: 1em;
  }

  .content div {
    z-index: 9;
    max-width: 490px;
    width: 100%;
    margin-left: auto;
  }

  p {
    background: black;
    width: fit-content;
  }

  /* responsiveness */
  @media (max-width: 800px) {
    .content {
      display: flex;
    }
    .content div {
      padding: 2em;
    }
  }
</style>
