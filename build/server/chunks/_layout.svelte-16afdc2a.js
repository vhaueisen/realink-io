import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component, g as getContext, e as escape } from './index-4bd6642a.js';

const css$3 = {
  code: "main.svelte-1odyw4t video.svelte-1odyw4t{position:absolute;top:0;left:0;width:100%;height:100%}main.container.svelte-1odyw4t.svelte-1odyw4t,.backdrop.svelte-1odyw4t.svelte-1odyw4t{margin:0;padding:0;max-height:100%;height:100%;width:100%;overflow:hidden;overflow-y:hidden;overflow-x:hidden;position:absolute;top:0;left:0}main.container.svelte-1odyw4t.svelte-1odyw4t{background-position:center;background-repeat:no-repeat;background-size:cover;position:absolute;top:0;bottom:0;left:0;right:0}.backdrop.svelte-1odyw4t.svelte-1odyw4t{transition:background-color 0.3s ease-in-out}.backdrop.active.svelte-1odyw4t.svelte-1odyw4t{background-color:rgba(0, 0, 0, 0.6)}",
  map: null
};
const BackgroundContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backdrop = false } = $$props;
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  $$result.css.add(css$3);
  return `<main class="${"container svelte-1odyw4t"}"><video ${"autoplay"} ${"loop"} ${"muted"} class="${"svelte-1odyw4t"}"><source src="${"/background/background.mp4"}" type="${"video/mp4"}"><track kind="${"captions"}"></video>

  <div class="${["backdrop svelte-1odyw4t", backdrop ? "active" : ""].join(" ").trim()}" style="${"overflow: hidden"}">${slots.default ? slots.default({}) : ``}
    <div></div></div>
</main>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  const readonly_stores = {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
  Object.defineProperties(readonly_stores, {
    preloading: {
      get() {
        console.error("stores.preloading is deprecated; use stores.navigating instead");
        return {
          subscribe: stores.navigating.subscribe
        };
      },
      enumerable: false
    },
    session: {
      get() {
        removed_session();
        return {};
      },
      enumerable: false
    }
  });
  return readonly_stores;
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
const css$2 = {
  code: "a.svelte-h98jzh{text-align:left;font-weight:500;font-family:Overpass;letter-spacing:4px;color:var(--pure-white);opacity:1;border:none;background:none;padding:1em;margin:0 2em;transition:color 0.3s ease-in-out;border-bottom:7px solid transparent;border-image-slice:1;border-width:7px;text-transform:uppercase}a.svelte-h98jzh:hover,a.active.svelte-h98jzh{color:var(--active-color);border-image-source:var(--horizontal-gradient);text-decoration:none}@media(max-width: 1280px){a.svelte-h98jzh{padding:1em 0}}",
  map: null
};
const NavButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { name } = $$props;
  let { to = "/" } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<a${add_attribute("href", to, 0)} class="${[
    "svelte-h98jzh",
    (to === "/" ? $page.url.pathname === "/" : $page.url.pathname.includes(to.slice(0, -1))) ? "active" : ""
  ].join(" ").trim()}">${escape(name)}
</a>`;
});
const css$1 = {
  code: "nav.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{width:100%;height:auto;position:relative;display:flex;justify-content:center;align-items:center;padding:1em 0;width:100%;z-index:10}.spacer.svelte-1x3shfl a.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{transition:color 0.3s ease-in-out;margin-left:1em}.spacer.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{right:16px;position:absolute;width:auto}.spacer.svelte-1x3shfl a.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl:hover,.nav-btns.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl:hover{color:var(--hover-color)}.nav.svelte-1x3shfl>.nav-btn.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{display:none}.nav.svelte-1x3shfl>.nav-links.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{display:inline;float:right;font-size:18px;align-self:center}.nav.svelte-1x3shfl>.nav-links.svelte-1x3shfl>.nav-btns.svelte-1x3shfl.svelte-1x3shfl{display:inline-block;padding:13px 10px 13px 10px;text-decoration:none}.nav.svelte-1x3shfl>#nav-check.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{display:none}@media(max-width: 1270px){.nav.svelte-1x3shfl>.nav-links.svelte-1x3shfl>.nav-btns.svelte-1x3shfl.svelte-1x3shfl:hover{background-color:rgba(0, 0, 0, 0.8)}.nav.svelte-1x3shfl>.nav-btn.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{display:inline-block;position:absolute;left:16px;top:20px}.nav.svelte-1x3shfl>.nav-btn.svelte-1x3shfl>label.svelte-1x3shfl.svelte-1x3shfl{display:inline-block;width:50px;height:50px;padding:13px}.nav.svelte-1x3shfl>.nav-btn.svelte-1x3shfl>label.svelte-1x3shfl.svelte-1x3shfl:hover,.nav.svelte-1x3shfl #nav-check.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl:focus{background:none}.nav.svelte-1x3shfl>.nav-btn.svelte-1x3shfl>label.svelte-1x3shfl>span.svelte-1x3shfl{display:block;width:25px;height:10px;border-top:2px solid #eee}.nav.svelte-1x3shfl>.nav-links.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{position:absolute;display:block;width:100%;background-color:rgba(0, 0, 0, 0.8);height:0px;transition:all 0.3s ease-in;overflow-y:hidden;top:4em;padding-top:0.5em;overflow-x:hidden;left:0px}.nav.svelte-1x3shfl>.nav-links.svelte-1x3shfl>.nav-btns.svelte-1x3shfl.svelte-1x3shfl{display:block;width:100%;margin:1em 0 2em 0}.nav.svelte-1x3shfl>#nav-check.svelte-1x3shfl:not(:checked)~.nav-links.svelte-1x3shfl.svelte-1x3shfl{height:0px;background:none}.nav.svelte-1x3shfl>#nav-check.svelte-1x3shfl:checked~.nav-links.svelte-1x3shfl.svelte-1x3shfl{position:absolute;top:100px;height:calc(100vh - 100px - 9px);overflow-y:auto}nav.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl.svelte-1x3shfl{height:100px;padding:0;margin:0;background:rgba(0, 0, 0, 0.5)}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navCheckElem;
  const navClick = () => {
  };
  $$result.css.add(css$1);
  return `<nav class="${"svelte-1x3shfl"}"><div class="${"nav svelte-1x3shfl"}"><input type="${"checkbox"}" id="${"nav-check"}" class="${"svelte-1x3shfl"}"${add_attribute("this", navCheckElem, 0)}>

    <div class="${"nav-btn svelte-1x3shfl"}"><label for="${"nav-check"}" class="${"svelte-1x3shfl"}"><span class="${"svelte-1x3shfl"}"></span>
        <span class="${"svelte-1x3shfl"}"></span>
        <span class="${"svelte-1x3shfl"}"></span></label></div>

    <div class="${"nav-links svelte-1x3shfl"}"><div class="${"nav-btns svelte-1x3shfl"}">${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      name: "In\xEDcio",
      to: "/",
      onClick: navClick
    },
    {},
    {}
  )}</div>
      <div class="${"nav-btns svelte-1x3shfl"}">${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      name: "Experi\xEAncias",
      to: "/product/experiences/0",
      onClick: navClick
    },
    {},
    {}
  )}</div>
      <div class="${"nav-btns svelte-1x3shfl"}">${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      name: "Jogos",
      to: "/product/games/0",
      onClick: navClick
    },
    {},
    {}
  )}</div>
      <div class="${"nav-btns svelte-1x3shfl"}">${validate_component(NavButton, "NavButton").$$render(
    $$result,
    {
      name: "Contato",
      to: "/quote",
      onClick: navClick
    },
    {},
    {}
  )}</div></div></div>

  <div class="${"spacer svelte-1x3shfl"}"><a href="${"https://br.linkedin.com/company/rogueunit"}" class="${"svelte-1x3shfl"}"><svg id="${""}" class="${"svelte-fa s-z-WEjw8Gh1FG"}" style="${"height:1em;font-size:2em;vertical-align:-.125em;transform-origin:center;overflow:visible"}" viewBox="${"0 0 448 512"}" aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(224 256)"}" transform-origin="${"112 0"}" class="${"s-z-WEjw8Gh1FG"}"><g transform="${"translate(0,0) scale(1,1)"}" class="${"s-z-WEjw8Gh1FG"}"><path d="${"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}" fill="${"currentColor"}" transform="${"translate(-224 -256)"}" class="${"s-z-WEjw8Gh1FG"}"></path></g></g></svg></a>
    <a href="${"https://www.instagram.com/rogueunit_"}" class="${"svelte-1x3shfl"}"><svg id="${""}" class="${"svelte-fa s-z-WEjw8Gh1FG"}" style="${"height:1em;font-size:2em;vertical-align:-.125em;transform-origin:center;overflow:visible"}" viewBox="${"0 0 448 512"}" aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(224 256)"}" transform-origin="${"112 0"}" class="${"s-z-WEjw8Gh1FG"}"><g transform="${"translate(0,0) scale(1,1)"}" class="${"s-z-WEjw8Gh1FG"}"><path d="${"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}" fill="${"currentColor"}" transform="${"translate(-224 -256)"}" class="${"s-z-WEjw8Gh1FG"}"></path></g></g></svg></a></div>
</nav>`;
});
const css = {
  code: ".full-wh.svelte-1lhxfte::-webkit-scrollbar{display:none}.full-wh.svelte-1lhxfte{position:absolute;top:80px;left:0px;bottom:0px;width:100%;-ms-overflow-style:none;scrollbar-width:none}.bg-animation.svelte-1lhxfte{position:fixed;top:-8500px;left:-8000px;width:100%;height:100%}@keyframes svelte-1lhxfte-Odd{from{transform:translate(0px, 0px)}to{transform:translate(-1000px, 1200px)}}@keyframes svelte-1lhxfte-Even{from{transform:translate(0px, 0px)}to{transform:translate(1250px, 1000px)}}",
  map: null
};
const author = "Rogue Unit";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<meta charset="${"utf-8"}" data-svelte="svelte-1f6usx7"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}" data-svelte="svelte-1f6usx7"><link rel="${"icon"}" href="${"/favicon.png"}" data-svelte="svelte-1f6usx7"><link href="${"https://fonts.googleapis.com/css?family=Overpass"}" rel="${"stylesheet"}" data-svelte="svelte-1f6usx7"><meta name="${"robots"}" content="${"index, follow"}" data-svelte="svelte-1f6usx7"><meta name="${"author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1f6usx7"><meta name="${"type"}" content="${"website"}" data-svelte="svelte-1f6usx7"><meta name="${"og:type"}" property="${"og:type"}" content="${"website"}" data-svelte="svelte-1f6usx7"><meta property="${"og:site_name"}"${add_attribute("content", author, 0)} data-svelte="svelte-1f6usx7"><meta property="${"og:locale"}" content="${"pt_BR"}" data-svelte="svelte-1f6usx7">`, ""}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(BackgroundContainer, "BackgroundContainer").$$render(
    $$result,
    {
      backdrop: $page.url.pathname.includes("experiences") || $page.url.pathname.includes("games") || $page.url.pathname.includes("privacy-policy") || $page.url.pathname.includes("/r") || $page.url.pathname.includes("content")
    },
    {},
    {
      default: () => {
        return `<div class="${"full-wh svelte-1lhxfte"}">
    <video autoplay muted loop class="${"bg-animation svelte-1lhxfte"}" src="${"/background/background.mp4"}"></video></div>
  ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-16afdc2a.js.map
