import { c as create_ssr_component, e as escape, v as validate_component } from './index-4bd6642a.js';
import { B as Button } from './Button-cdf2ffff.js';

const css = {
  code: ".content.svelte-p462lq.svelte-p462lq{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.content.svelte-p462lq>.svelte-p462lq{margin-top:1em;text-align:center}.btn-row.svelte-p462lq.svelte-p462lq{display:flex;flex-direction:row;justify-content:center;z-index:9}.content.svelte-p462lq.svelte-p462lq{background-color:rgba(0, 0, 0, 0.7)}.spacer.svelte-p462lq.svelte-p462lq{width:2em}",
  map: null
};
function load({ error, status }) {
  return { props: { status } };
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status = "" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `<div class="${"content svelte-p462lq"}"><h1 class="${"svelte-p462lq"}">${escape(status)}</h1>
	<p class="${"svelte-p462lq"}">Ooops... Parece que voc\xEA est\xE1 perdido.</p>
	<div class="${"btn-row svelte-p462lq"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "a",
      href: "javascript:history.back()"
    },
    {},
    {
      default: () => {
        return `Voltar`;
      }
    }
  )}
		<div class="${"spacer svelte-p462lq"}"></div>
		${validate_component(Button, "Button").$$render($$result, { type: "a", href: "/" }, {}, {
    default: () => {
      return `In\xEDcio`;
    }
  })}</div>
</div>`;
});

export { Error as default, load };
//# sourceMappingURL=_error.svelte-8fda3441.js.map
