const manifest = {
	appDir: "_app",
	assets: new Set(["background/Dust1.png","background/Dust2.png","background/primary-background.jpg","boneco_neco/icon.png","boneco_neco/slide1.png","build_your_bus/icon.png","build_your_bus/slide1.png","cn_meta/slide1.jpeg","cn_meta/slide2.jpeg","cn_meta/slide3.jpeg","cn_meta/slide4.jpeg","colorindo/icon.png","colorindo/slide1.png","explode_asteroids/icon.webp","explode_asteroids/slide1.png","favicon.png","hyperlight_wings/slide1.png","logo_preto_v.png","papa-peixe/slide1.png","papa-peixe/slide2.png","papa-peixe/slide3.png","papa-peixe/slide4.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-a440ec22.js","imports":["_app/immutable/start-a440ec22.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/singletons-3ce113de.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-21cf04ba.js'),
			() => import('./chunks/1-f9b4b603.js'),
			() => import('./chunks/2-dddfd5cf.js'),
			() => import('./chunks/3-1fe37d0b.js'),
			() => import('./chunks/4-dbf22b49.js'),
			() => import('./chunks/5-fc3fae49.js'),
			() => import('./chunks/6-69785257.js')
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
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "privacy-policy/papa-peixe",
				pattern: /^\/privacy-policy\/papa-peixe\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "r/[productId]",
				pattern: /^\/r\/([^/]+?)\/?$/,
				names: ["productId"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "product/[productTypeId]/[productId]",
				pattern: /^\/product\/([^/]+?)\/([^/]+?)\/?$/,
				names: ["productTypeId","productId"],
				types: [null,null],
				page: { layouts: [0], errors: [1], leaf: 4 },
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
