const manifest = {
	appDir: "_app",
	assets: new Set(["background/Dust1.png","background/Dust2.png","background/primary-background.jpg","boneco_neco/icon.png","boneco_neco/slide1.png","build_your_bus/icon.png","build_your_bus/slide1.png","cn_meta/slide1.jpeg","cn_meta/slide2.jpeg","cn_meta/slide3.jpeg","cn_meta/slide4.jpeg","colorindo/icon.png","colorindo/slide1.png","explode_asteroids/icon.webp","explode_asteroids/slide1.png","favicon.png","hyperlight_wings/slide1.png","logo_preto_v.png","papa-peixe/slide1.png","papa-peixe/slide2.png","papa-peixe/slide3.png","papa-peixe/slide4.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-75688fee.js","imports":["_app/immutable/start-75688fee.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/singletons-f5bbb40a.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-44bb2654.js'),
			() => import('./chunks/1-f9b4b603.js'),
			() => import('./chunks/2-dddfd5cf.js'),
			() => import('./chunks/3-47277f01.js'),
			() => import('./chunks/4-e6c0e458.js'),
			() => import('./chunks/5-9653efd4.js'),
			() => import('./chunks/6-8ccd6d12.js'),
			() => import('./chunks/7-bb847b65.js'),
			() => import('./chunks/8-550021e0.js'),
			() => import('./chunks/9-7ad9cff3.js'),
			() => import('./chunks/10-03c66882.js'),
			() => import('./chunks/11-9e7f37c5.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "quote",
				pattern: /^\/quote\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "privacy-policy/culinaria-capixaba",
				pattern: /^\/privacy-policy\/culinaria-capixaba\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "privacy-policy/letras-e-sons",
				pattern: /^\/privacy-policy\/letras-e-sons\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "privacy-policy/papa-peixe",
				pattern: /^\/privacy-policy\/papa-peixe\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "privacy-policy/queimados",
				pattern: /^\/privacy-policy\/queimados\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "content/culinaria-capixaba/moqueca",
				pattern: /^\/content\/culinaria-capixaba\/moqueca\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "content/culinaria-capixaba/torta",
				pattern: /^\/content\/culinaria-capixaba\/torta\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "r/[productId]",
				pattern: /^\/r\/([^/]+?)\/?$/,
				names: ["productId"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "product/[productTypeId]/[productId]",
				pattern: /^\/product\/([^/]+?)\/([^/]+?)\/?$/,
				names: ["productTypeId","productId"],
				types: [null,null],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
