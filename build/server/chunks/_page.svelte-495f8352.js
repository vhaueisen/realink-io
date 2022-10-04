import { c as create_ssr_component, v as validate_component, e as escape } from './index-4bd6642a.js';
import { B as Button } from './Button-cdf2ffff.js';

const css$1 = {
  code: ".form-group.svelte-1syespp.svelte-1syespp{margin-bottom:1rem;border:7px solid transparent;border-image-slice:1;border-width:4px;border-image-source:var(--horizontal-gradient);padding:0.5em;background:black}.form-group.svelte-1syespp input.svelte-1syespp,.form-group.svelte-1syespp textarea.svelte-1syespp{font:normal normal normal 20px/26px Overpass;color:var(--active-color);text-decoration:none;border:none;background:black;width:100%;resize:none}.svelte-1syespp.svelte-1syespp:focus{outline:none}.form-footer.svelte-1syespp.svelte-1syespp{display:flex;align-items:center;justify-content:flex-end;width:100%;height:100px}input.svelte-1syespp.svelte-1syespp{color-scheme:dark}input.svelte-1syespp.svelte-1syespp:-webkit-autofill,input.svelte-1syespp.svelte-1syespp:-webkit-autofill:hover,input.svelte-1syespp.svelte-1syespp:-webkit-autofill:focus,textarea.svelte-1syespp.svelte-1syespp:-webkit-autofill,textarea.svelte-1syespp.svelte-1syespp:-webkit-autofill:hover,textarea.svelte-1syespp.svelte-1syespp:-webkit-autofill:focus{-webkit-text-fill-color:var(--active-color) !important}",
  map: null
};
const QuoteForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<form method="${"POST"}" action="${"/quote"}" class="${"svelte-1syespp"}">
  <div class="${"form-group svelte-1syespp"}"><input type="${"text"}" class="${"form-control svelte-1syespp"}" id="${"companyName"}" name="${"companyName"}" placeholder="${"Nome da companhia"}" required></div>

  
  <div class="${"form-group svelte-1syespp"}">${``}
    <input type="${"email"}" class="${"form-control svelte-1syespp"}" id="${"email"}" placeholder="${"Email"}" name="${"email"}" required></div>

  
  <div class="${"form-group svelte-1syespp"}"><textarea class="${"form-control svelte-1syespp"}" id="${"message"}" rows="${"9"}" placeholder="${"Mensagem..."}" name="${"message"}" required></textarea></div>
  
  <div class="${"form-footer svelte-1syespp"}">${validate_component(Button, "Button").$$render($$result, { type: "button", btnType: "submit" }, {}, {
    default: () => {
      return `Send`;
    }
  })}</div>
</form>`;
});
const css = {
  code: ".content.svelte-x1fmzc.svelte-x1fmzc{width:100%;display:grid;grid-template-columns:repeat(2, 1fr);gap:2em;height:100%;align-items:center;z-index:9;margin-top:1em}.content.svelte-x1fmzc div.svelte-x1fmzc{z-index:9;max-width:490px;width:100%;margin-left:auto}p.svelte-x1fmzc.svelte-x1fmzc{background:black;width:fit-content}@media(max-width: 800px){.content.svelte-x1fmzc.svelte-x1fmzc{display:flex}.content.svelte-x1fmzc div.svelte-x1fmzc{padding:2em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form: form2 } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form2 !== void 0)
    $$bindings.form(form2);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Realink \u2014 Fale Conosco</title>`, ""}<meta name="${"description"}" content="${"About this app"}" data-svelte="svelte-1rhjm3l">`, ""}

<div class="${"content svelte-x1fmzc"}"><div class="${"svelte-x1fmzc"}"><h1>CONTATO</h1>
    ${!((form2 == null ? void 0 : form2.success) || (form2 == null ? void 0 : form2.error)) ? `${validate_component(QuoteForm, "QuoteForm").$$render($$result, {}, {}, {})}` : ``}
    ${(form2 == null ? void 0 : form2.success) ? `<p class="${"svelte-x1fmzc"}">Seu contato foi enviado e logo ser\xE1 tratado por nossa equipe!</p>` : ``}
    ${(form2 == null ? void 0 : form2.error) ? `<p class="${"svelte-x1fmzc"}">${escape(form2 == null ? void 0 : form2.error)}</p>` : ``}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-495f8352.js.map
