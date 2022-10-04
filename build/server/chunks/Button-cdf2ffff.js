import { c as create_ssr_component, d as add_attribute } from './index-4bd6642a.js';

const css = {
  code: "button.svelte-18c68gc,a.svelte-18c68gc{text-align:center;font:normal normal medium 30px/37px Overpass;letter-spacing:4.8px;color:var(--pure-white);border:none;background:none;padding:0.5em 1em;transition:color 0.3s ease-in-out;text-transform:uppercase;border:4px solid transparent;background:linear-gradient(to right, black, black), var(--horizontal-gradient);background-clip:padding-box, border-box;background-origin:padding-box, border-box;border-radius:33px;text-decoration:none}button.svelte-18c68gc:hover,a.svelte-18c68gc:hover{color:var(--active-color);text-decoration:none}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "button" } = $$props;
  let { href = "/" } = $$props;
  let { btnType = "" } = $$props;
  let { onclick = () => {
  } } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.btnType === void 0 && $$bindings.btnType && btnType !== void 0)
    $$bindings.btnType(btnType);
  if ($$props.onclick === void 0 && $$bindings.onclick && onclick !== void 0)
    $$bindings.onclick(onclick);
  $$result.css.add(css);
  return `
${type === "button" ? `<button${add_attribute("type", btnType, 0)} class="${"svelte-18c68gc"}">${slots.default ? slots.default({}) : ``}</button>` : ``}

${type === "a" ? `<a${add_attribute("onclick", onclick, 0)}${add_attribute("href", href, 0)} class="${"svelte-18c68gc"}">${slots.default ? slots.default({}) : ``}</a>` : ``}`;
});

export { Button as B };
//# sourceMappingURL=Button-cdf2ffff.js.map
