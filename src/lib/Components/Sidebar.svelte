<script lang="ts">
  export let cards: Array<string> = [];
  export let idx: number = 0;
  $: sidebarOn = false;
  setTimeout(() => {
    sidebarOn = true;
  }, 10);
</script>

<div class="sidebar" class:active={sidebarOn}>
  {#each cards as card, i}
    <div class="card" class:active={i == idx}>
      <a href={i.toString()}>
        <div class="content" style="background-image: url({card});" />
      </a>
    </div>
  {/each}
</div>

<style>
  .sidebar {
    max-width: 300px;
    position: fixed;
    top: 0;
    right: -300px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 1em 2em;
    overflow-y: auto;
    transition: all 500ms ease-in-out;
    overflow-x: hidden;
    scrollbar-track-color: #000;
    scrollbar-arrow-color: #000;
    padding-top: 5em;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 2px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  ::-webkit-resizer {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .sidebar.active {
    right: 0;
  }

  .sidebar .card {
    width: 200px !important;
    height: 200px !important;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 10px 99px #00000052;
    border-radius: 45px;
    padding: 1em;
    margin-bottom: 2em;
  }

  .sidebar .card.active,
  .sidebar .card:hover {
    background: transparent var(--vertical-gradient) 0% 0% no-repeat padding-box;
  }

  .sidebar .card .content {
    border-radius: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-color: black;
  }

  @media (max-width: 1280px) {
    .sidebar {
      max-width: 100%;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
      padding: 0.5em;
      overflow-y: hidden;
      overflow-x: auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      bottom: auto;
      top: 100px;
    }

    .sidebar .card {
      width: 84px !important;
      height: 84px !important;
      min-width: 84px !important;
      min-height: 84px !important;
      border-radius: 20px;
      padding: 0.5em;
      margin: 0 1em;
    }

    .sidebar .card .content {
      border-radius: 20px;
    }
  }
</style>
