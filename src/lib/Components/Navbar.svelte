<script lang="ts">
  import NavButton from "$lib/Components/NavButton.svelte";
  let navCheckElem: HTMLInputElement | null;

  const navClick = () => {
    if (navCheckElem) {
      navCheckElem.checked = false;
    }
  };
</script>

<nav>
  <div class="nav">
    <input type="checkbox" id="nav-check" bind:this={navCheckElem} />

    <div class="nav-btn">
      <label for="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>

    <div class="nav-links">
      <div class="nav-btns">
        <NavButton name="Início" to="/" onClick={navClick} />
      </div>
      <div class="nav-btns">
        <NavButton
          name="Experiências"
          to="/product/experiences/0"
          onClick={navClick}
        />
      </div>
      <div class="nav-btns">
        <NavButton name="Jogos" to="/product/games/0" onClick={navClick} />
      </div>
      <div class="nav-btns">
        <NavButton name="Contato" to="/quote" onClick={navClick} />
      </div>
    </div>
  </div>

  <div class="spacer">
    <a href="https://br.linkedin.com/company/rogueunit"
      ><svg
        id=""
        class="svelte-fa s-z-WEjw8Gh1FG"
        style="height:1em;font-size:2em;vertical-align:-.125em;transform-origin:center;overflow:visible"
        viewBox="0 0 448 512"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        ><g
          transform="translate(224 256)"
          transform-origin="112 0"
          class="s-z-WEjw8Gh1FG"
          ><g transform="translate(0,0) scale(1,1)" class="s-z-WEjw8Gh1FG"
            ><path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              fill="currentColor"
              transform="translate(-224 -256)"
              class="s-z-WEjw8Gh1FG"
            /></g
          ></g
        ></svg
      ></a
    >
    <a href="https://www.instagram.com/rogueunit.gg"
      ><svg
        id=""
        class="svelte-fa s-z-WEjw8Gh1FG"
        style="height:1em;font-size:2em;vertical-align:-.125em;transform-origin:center;overflow:visible"
        viewBox="0 0 448 512"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        ><g
          transform="translate(224 256)"
          transform-origin="112 0"
          class="s-z-WEjw8Gh1FG"
          ><g transform="translate(0,0) scale(1,1)" class="s-z-WEjw8Gh1FG"
            ><path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              fill="currentColor"
              transform="translate(-224 -256)"
              class="s-z-WEjw8Gh1FG"
            /></g
          ></g
        ></svg
      ></a
    >
  </div>
</nav>

<style>
  nav {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
    width: 100%;
    z-index: 10;
  }

  .spacer a {
    transition: color 0.3s ease-in-out;
    margin-left: 1em;
  }

  .spacer {
    right: 16px;
    position: absolute;
    width: auto;
  }

  .spacer a:hover,
  .nav-btns:hover {
    color: var(--hover-color);
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
    align-self: center;
  }

  .nav > .nav-links > .nav-btns {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 1270px) {
    .nav > .nav-links > .nav-btns:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      left: 16px;
      top: 20px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:focus {
      background: none;
    }

    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 4em;
      padding-top: 0.5em;
      overflow-x: hidden;
      left: 0px;
    }
    .nav > .nav-links > .nav-btns {
      display: block;
      width: 100%;
      margin: 1em 0 2em 0;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
      background: none;
    }
    .nav > #nav-check:checked ~ .nav-links {
      position: absolute;
      top: 100px;
      height: calc(100vh - 100px - 9px);
      overflow-y: auto;
    }
    nav {
      height: 100px;
      padding: 0;
      margin: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>
