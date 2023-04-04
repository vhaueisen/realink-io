import { d as db } from './index3-5a542ebc.js';
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

const index = 6;
const component = async () => (await import('./_page.svelte-c3fdcf0d.js')).default;
const file = '_app/immutable/components/pages/r/_productId_/_page.svelte-79ddb0a0.js';
const imports = ["_app/immutable/components/pages/r/_productId_/_page.svelte-79ddb0a0.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/Button-f4cb886a.js","_app/immutable/modules/pages/r/_productId_/_page.ts-339fda71.js","_app/immutable/chunks/index-e294f18c.js","_app/immutable/chunks/OS-34bd786a.js","_app/immutable/chunks/control-03134885.js","_app/immutable/chunks/_page-313e88e8.js"];
const stylesheets = ["_app/immutable/assets/_page-1b636b39.css","_app/immutable/assets/Button-dcf7fb3b.css"];

export { component, file, imports, index, _page_ts as shared, stylesheets };
//# sourceMappingURL=6-69785257.js.map
