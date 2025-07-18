import { d as db } from './index3-ea016d4b.js';
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
const component = async () => (await import('./_page.svelte-bb58f2dc.js')).default;
const file = '_app/immutable/components/pages/product/_productTypeId_/_productId_/_page.svelte-171b9b1a.js';
const imports = ["_app/immutable/components/pages/product/_productTypeId_/_productId_/_page.svelte-171b9b1a.js","_app/immutable/chunks/index-9f90c359.js","_app/immutable/chunks/preload-helper-b21cceae.js","_app/immutable/chunks/Button-7d7ddd58.js","_app/immutable/modules/pages/product/_productTypeId_/_productId_/_page.ts-942f2980.js","_app/immutable/chunks/index-8c6e3914.js","_app/immutable/chunks/OS-34bd786a.js","_app/immutable/chunks/control-03134885.js","_app/immutable/chunks/_page-b7523a85.js"];
const stylesheets = ["_app/immutable/assets/_page-3309274b.css","_app/immutable/assets/Button-dcf7fb3b.css"];

export { component, file, imports, index, _page_ts as shared, stylesheets };
//# sourceMappingURL=9-2dad49f8.js.map
