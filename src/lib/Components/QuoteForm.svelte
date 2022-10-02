<script context="module" lang="ts">
  import Button from "$lib/Components/Button.svelte";
  /** @type {import('./$types').ActionData} */
  export let form: any;
</script>

<form method="POST" action="/quote">
  <!-- Company name input -->
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      id="companyName"
      name="companyName"
      placeholder="Nome da companhia"
      required
    />
  </div>

  <!-- email input -->
  <div class="form-group">
    {#if form?.missing}<p class="error">The email field is required</p>{/if}
    <input
      type="email"
      class="form-control"
      id="email"
      placeholder="Email"
      name="email"
      required
    />
  </div>

  <!-- message input -->
  <div class="form-group">
    <textarea
      class="form-control"
      id="message"
      rows="9"
      placeholder="Mensagem..."
      name="message"
      required
    />
  </div>
  <!-- send button -->
  <div class="form-footer">
    <Button type="button" btnType="submit">Send</Button>
  </div>
</form>

<style>
  .form-group {
    margin-bottom: 1rem;
    border: 7px solid transparent;
    border-image-slice: 1;
    border-width: 4px;
    border-image-source: var(--horizontal-gradient);
    padding: 0.5em;
    background: black;
  }

  .form-group input,
  .form-group textarea {
    font: normal normal normal 20px/26px Overpass;
    color: var(--active-color);
    text-decoration: none;
    border: none;
    background: black;
    width: 100%;
    resize: none;
  }
  *:focus {
    outline: none;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100px;
  }

  input {
    color-scheme: dark;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--active-color) !important;
  }
</style>
