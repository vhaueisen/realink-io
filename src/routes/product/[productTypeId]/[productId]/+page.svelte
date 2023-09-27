<script lang="ts">
  import ProductContent from "$lib/Components/Product/ProductContent.svelte";
  /** @type {import('./$types').PageData} */
  export let data: any;

  const fallback = "Rogue Unit — Nossos Jogos";
  let title = data?.content?.title ?? fallback;
  let description = (data?.content?.content ?? title)
    .replace(/\*/g, "")
    .slice(0, 160);
  let image = data?.content?.img ?? "";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta rel="icon" type="image/png" href={image} />
  <meta name="og:title" property="og:title" content={title} />
  <meta name="og:description" property="og:description" content={description} />
  <meta name="og:image" property="og:image" content={image} />
</svelte:head>
{#if data}
  <ProductContent cards={data?.cards} product={data?.content} />
{/if}
