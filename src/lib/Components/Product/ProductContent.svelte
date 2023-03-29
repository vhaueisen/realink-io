<script lang="ts">
  import Button from "$lib/Components/Button.svelte";
  import ProductCarousel from "$lib/Components/Product/ProductCarousel.svelte";
  import Sidebar from "$lib/Components/Sidebar.svelte";
  import type { IProduct } from "$lib/models/IProduct";
  export let cards: string[];
  export let product: IProduct | undefined;
  import SvelteMarkdown from "svelte-markdown";
  import { onMount } from "svelte";
  import type { ILink } from "$lib/Utils/Link";
  $: resolve = (link: ILink): string => "";

  onMount(async () => {
    const _module = await import("$lib/Utils/Link");
    resolve = _module.resolve;
  });
</script>

<article>
  <section>
    <ProductCarousel slides={product?.slides ? product?.slides : []} />
    <h2>{product?.title}</h2>
    <SvelteMarkdown source={product?.content} />
    <span>
      {#each product?.link ?? [] as l}
        <Button type="a" href={resolve(l)}>{l.text}</Button>
      {/each}
    </span>
    <div class="spacer">&nbsp;</div>
  </section>
  <Sidebar {cards} idx={product?.id} />
</article>

<style>
  article {
    margin-bottom: 4em;
  }

  section {
    padding-top: 4em;
    padding-bottom: 4em;
    margin-bottom: 4em;
  }

  section span {
    margin: 2em 0 5em 0;
    align-self: flex-end;
    height: auto;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  section span :global(a) {
    margin: 0 0.5em;
  }

  .spacer {
    height: 5em;
  }
</style>
