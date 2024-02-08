import { d as db } from './index3-ea016d4b.js';
import { e as error } from './index2-1a2749b7.js';

function load({ params }) {
  const item = new db().getLinks(params.productId);
  if (item)
    return item;
  throw error(404, "Not found");
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
const component = async () => (await import('./_page.svelte-b5a078b2.js')).default;
const file = '_app/immutable/components/pages/r/_productId_/_page.svelte-8a0287b2.js';
const imports = ["_app/immutable/components/pages/r/_productId_/_page.svelte-8a0287b2.js","_app/immutable/chunks/preload-helper-b21cceae.js","_app/immutable/chunks/index-9f90c359.js","_app/immutable/chunks/Button-7d7ddd58.js","_app/immutable/modules/pages/r/_productId_/_page.ts-b3c0f970.js","_app/immutable/chunks/index-8c6e3914.js","_app/immutable/chunks/OS-34bd786a.js","_app/immutable/chunks/control-03134885.js","_app/immutable/chunks/_page-aab8e2ef.js"];
const stylesheets = ["_app/immutable/assets/_page-59c55588.css","_app/immutable/assets/Button-dcf7fb3b.css"];

export { component, file, imports, index, _page_ts as shared, stylesheets };
//# sourceMappingURL=11-2aec1633.js.map
