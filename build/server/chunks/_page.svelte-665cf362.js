import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from './index-4bd6642a.js';
import { B as Button } from './Button-cdf2ffff.js';

const css = {
  code: ".round-img.svelte-1ghrtv4{border-radius:50%;width:8em;height:8em;border:2px white solid}section.svelte-1ghrtv4{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:1em}",
  map: null
};
const fallback = "Realink \u2014 Nossos Jogos";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resolve;
  let { data } = $$props;
  let title = (data == null ? void 0 : data.title) ?? fallback;
  let description = ((data == null ? void 0 : data.description) ?? title).replace(/\*/g, "").slice(0, 160);
  let image = (data == null ? void 0 : data.img) ?? "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  resolve = (link) => "";
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-whws1a"><meta rel="${"icon"}" type="${"image/png"}"${add_attribute("href", image, 0)} data-svelte="svelte-whws1a"><meta name="${"og:title"}" property="${"og:title"}"${add_attribute("content", title, 0)} data-svelte="svelte-whws1a"><meta name="${"og:description"}" property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-whws1a"><meta name="${"og:image"}" property="${"og:image"}"${add_attribute("content", image, 0)} data-svelte="svelte-whws1a">`, ""}
${data ? `<article><section class="${"svelte-1ghrtv4"}"><img${add_attribute("src", data == null ? void 0 : data.img, 0)}${add_attribute("alt", data == null ? void 0 : data.title, 0)} class="${"round-img svelte-1ghrtv4"}">
      <h1>${escape(data == null ? void 0 : data.title)}</h1>
      ${each(data == null ? void 0 : data.links, (link) => {
    return `<p>${validate_component(Button, "Button").$$render($$result, { type: "a", href: resolve(link) }, {}, {
      default: () => {
        return `${escape(link.text)}`;
      }
    })}
        </p>`;
  })}</section></article>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-665cf362.js.map
