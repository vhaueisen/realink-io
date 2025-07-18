const manifest = {
	appDir: "_app",
	assets: new Set(["background/background.mp4","background/Dust1.png","background/Dust2.png","background/primary-background.jpg","boneco_neco/icon.png","boneco_neco/slide1.png","build_your_bus/icon.png","build_your_bus/slide1.png","cn_meta/slide1.jpeg","cn_meta/slide2.jpeg","cn_meta/slide3.jpeg","cn_meta/slide4.jpeg","colorindo/icon.png","colorindo/slide1.png","explode_asteroids/icon.webp","explode_asteroids/slide1.png","favicon.png","hyperlight_wings/slide1.png","logo_h.png","loud-league/1.png","loud-league/2.png","loud-league/3.png","loud-league/4.png","loud-league/5.png","loud-league/6.png","loud-league/7.png","loud-league/logo.png","mail-icon.png","nestle/surpresa.html","papa-peixe/slide1.png","papa-peixe/slide2.png","papa-peixe/slide3.png","papa-peixe/slide4.png","robots.txt","rogue-icon.png","rogue-line.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".html":"text/html",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-7d88ddc3.js","imports":["_app/immutable/start-7d88ddc3.js","_app/immutable/chunks/preload-helper-b21cceae.js","_app/immutable/chunks/index-9f90c359.js","_app/immutable/chunks/singletons-5a550bca.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-0c4313fd.js'),
			() => import('./chunks/1-5bc5e5b9.js'),
			() => import('./chunks/2-325de33b.js'),
			() => import('./chunks/3-734951f2.js'),
			() => import('./chunks/4-6ae5ee81.js'),
			() => import('./chunks/5-a83333a2.js'),
			() => import('./chunks/6-7b6a9dfe.js'),
			() => import('./chunks/7-17264b64.js'),
			() => import('./chunks/8-039b2f98.js'),
			() => import('./chunks/9-2dad49f8.js'),
			() => import('./chunks/10-5ef04c67.js'),
			() => import('./chunks/11-2aec1633.js')
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
