<script lang="ts">
  import Button from "$lib/Components/Button.svelte";
  import type { ILink } from "$lib/Utils/Link";
  import { onMount } from "svelte";
  $: resolve = (link: ILink): string => "";

  onMount(async () => {
    const _module = await import("$lib/Utils/Link");
    resolve = _module.resolve;
  });
  export let data: any;

  const fallback = "Realink — Nossos Jogos";
  let title = data?.title ?? fallback;
  let description = (data?.description ?? title)
    .replace(/\*/g, "")
    .slice(0, 160);
  let image = data?.img ?? "";
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
  <article>
    <section>
      <img src={data?.img} alt={data?.title} class="round-img" />
      <h1>{data?.title}</h1>
      {#each data?.links as link}
        <p>
          <Button type="a" href={resolve(link)}>{link.text}</Button>
        </p>
      {/each}
    </section>
  </article>
{/if}

<style>
  .round-img {
    border-radius: 50%;
    width: 8em;
    height: 8em;
    border: 2px white solid;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1em;
  }
</style>
