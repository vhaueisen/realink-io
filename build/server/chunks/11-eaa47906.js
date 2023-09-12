import { d as db } from './index3-b4a878be.js';
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
const component = async () => (await import('./_page.svelte-f592eaf8.js')).default;
const file = '_app/immutable/components/pages/r/_productId_/_page.svelte-3c81eb18.js';
const imports = ["_app/immutable/components/pages/r/_productId_/_page.svelte-3c81eb18.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/Button-f4cb886a.js","_app/immutable/modules/pages/r/_productId_/_page.ts-e2191da3.js","_app/immutable/chunks/index-ce92f4ef.js","_app/immutable/chunks/OS-34bd786a.js","_app/immutable/chunks/control-03134885.js","_app/immutable/chunks/_page-33e54b2b.js"];
const stylesheets = ["_app/immutable/assets/_page-59c55588.css","_app/immutable/assets/Button-dcf7fb3b.css"];

export { component, file, imports, index, _page_ts as shared, stylesheets };
//# sourceMappingURL=11-eaa47906.js.map
