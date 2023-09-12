import { d as db } from './index3-e2e9df69.js';
import { e as error } from './index2-1a2749b7.js';

function load({ params }) {
  const item = new db().getProduct(params.productTypeId, params.productId);
  if (item == null ? void 0 : item.content) {
    return item;
  }
  throw error(404, "Not found");
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-fa107b09.js')).default;
const file = '_app/immutable/components/pages/product/_productTypeId_/_productId_/_page.svelte-3b57b6ef.js';
const imports = ["_app/immutable/components/pages/product/_productTypeId_/_productId_/_page.svelte-3b57b6ef.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/Button-f4cb886a.js","_app/immutable/modules/pages/product/_productTypeId_/_productId_/_page.ts-f40cafcf.js","_app/immutable/chunks/index-fae30e0f.js","_app/immutable/chunks/OS-34bd786a.js","_app/immutable/chunks/control-03134885.js","_app/immutable/chunks/_page-74575db1.js"];
const stylesheets = ["_app/immutable/assets/_page-3aba67a1.css","_app/immutable/assets/Button-dcf7fb3b.css"];

export { component, file, imports, index, _page_ts as shared, stylesheets };
//# sourceMappingURL=9-e2eaeead.js.map
