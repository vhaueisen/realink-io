const manifest = {
	appDir: "_app",
	assets: new Set(["background/Dust1.png","background/Dust2.png","background/primary-background.jpg","boneco_neco/icon.png","boneco_neco/slide1.png","build_your_bus/icon.png","build_your_bus/slide1.png","cn_meta/slide1.jpeg","cn_meta/slide2.jpeg","cn_meta/slide3.jpeg","cn_meta/slide4.jpeg","colorindo/icon.png","colorindo/slide1.png","explode_asteroids/icon.webp","explode_asteroids/slide1.png","favicon.png","hyperlight_wings/slide1.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-7f8ddb8b.js","imports":["_app/immutable/start-7f8ddb8b.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/singletons-3466fc8e.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-799b2039.js'),
			() => import('./chunks/1-50a7724f.js'),
			() => import('./chunks/2-d7536042.js'),
			() => import('./chunks/3-abff9164.js'),
			() => import('./chunks/4-b8fc0001.js')
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
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "product/[productTypeId]/[productId]",
				pattern: /^\/product\/([^/]+?)\/([^/]+?)\/?$/,
				names: ["productTypeId","productId"],
				types: [null,null],
				page: { layouts: [0], errors: [1], leaf: 3 },
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
