<script>
  import QuoteForm from "$lib/Components/QuoteForm.svelte";
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<svelte:head>
  <title>Realink — Fale Conosco</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="content">
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
</div>

<style>
  .content {
    width: 100%;
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
