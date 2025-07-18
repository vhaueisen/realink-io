import { neco } from '$lib/models/BonecoNeco';
import { bus } from '$lib/models/BuildYourBus';
import { colorindo } from '$lib/models/Colorindo';
import { wings } from '$lib/models/HyperlightWings';
import { sportvLand } from '$lib/models/SportvLand';
import type { IProduct } from '$lib/models/IProduct';
import { OS } from '$lib/Utils/OS';
import { papaPeixe } from '$lib/models/PapaPeixe';
import { loudLeague } from '$lib/models/LoudLeague';

export const Products: Array<{ id: string; content: IProduct[] }> = [
	{
		id: 'games',
		content: [
			{
				id: 0,
				title: 'Hyperlight Wings — 2021',
				img: 'https://realink.io/hyperlight_wings/slide1.png',
				content: wings,
				slides: ['https://www.youtube.com/embed/6JXtxsXj0jM', '/hyperlight_wings/slide1.png'],
				link: [
					{ href: { [OS.Desktop]: 'https://www.roblox.com/games/6882790797/Hyperlight-Wings-Alpha' }, text: "Acessar" },
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			// {
			// 	id: 1,
			// 	title: 'Papa-Peixe — 2023',
			// 	img: 'https://play-lh.googleusercontent.com/NMSXCfnrzvjna2dxiL1dtIkflfM-_F53LKYB3g51B53nE2WRQJCrB5O8IrbaHBAHTBek',
			// 	content: papaPeixe,
			// 	slides: [
			// 		'/papa-peixe/slide1.png',
			// 		'/papa-peixe/slide2.png',
			// 		'/papa-peixe/slide3.png',
			// 		'/papa-peixe/slide4.png',
			// 	],
			// 	link: [
			// 		{
			// 			href: {
			// 				[OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.Realink.Words.PapaPeixe',
			// 				[OS.iOS]: 'https://apps.apple.com/app/id6447073898'
			// 			}, text: "Acessar"
			// 		},
			// 		{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
			// 	]
			// },
			// {
			// 	id: 2,
			// 	title: 'Build your Bus — 2021',
			// 	img: 'https://realink.io/build_your_bus/icon.png',
			// 	content: bus,
			// 	slides: [
			// 		'https://www.youtube.com/embed/EcDt-3oPS_g',
			// 		'/build_your_bus/slide1.png',
			// 	],
			// 	link: [
			// 		{ href: { [OS.Desktop]: 'https://storm.realink.io/' }, text: "Acessar" },
			// 		{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
			// 	]
			// },
			// {
			// 	id: 3,
			// 	title: 'Colorindo a Cultura Capixaba — 2021',
			// 	img: 'https://realink.io/colorindo/icon.png',
			// 	content: colorindo,
			// 	slides: [
			// 		'https://www.youtube.com/embed/52brkRRCUrk',
			// 		'https://www.youtube.com/embed/BPoiooYzOzM',
			// 		'https://www.youtube.com/embed/EAiJ2s8gEes',
			// 		'/colorindo/slide1.png'
			// 	],
			// 	link: [
			// 		{
			// 			href: {
			// 				[OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.BardoSolutions.Coloring.MuquecaEditorial',
			// 				[OS.iOS]: 'https://apps.apple.com/us/app/colorindo-a-cultura-capixaba/id1563589901'
			// 			},
			// 			text: "Acessar"
			// 		},
			// 		{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
			// 	]
			// },
			// {
			// 	id: 4,
			// 	title: 'Boneco Neco — 2021',
			// 	img: 'https://realink.io/boneco_neco/icon.png',
			// 	content: neco,
			// 	slides: ['https://www.youtube.com/embed/yd1TM-PTGBI', '/boneco_neco/slide1.png'],
			// 	link: [
			// 		{
			// 			href: {
			// 				[OS.Android]: 'https://play.google.com/store/apps/details?id=com.BardoSolutions.EndlessRunner.GrupoEstripolia',
			// 				[OS.Desktop]: 'https://grupoestripolia.com.br/jogo/',
			// 				[OS.iOS]: 'https://apps.apple.com/us/app/boneco-neco/id1585767464'
			// 			},
			// 			text: "Acessar"
			// 		},
			// 		{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
			// 	]
			// },
			// {
			// 	id: 5,
			// 	title: 'Explode Asteroids — 2017',
			// 	img: 'https://realink.io/explode_asteroids/icon.webp',
			// 	content: `Embarque em uma jornada pelo espaço e destrua todos os asteroides! Use seu blaster de nave espacial para destruir os asteroides de todas as cores. Ganhe moedas e compre até 12 naves espaciais únicas e 12 projéteis diferentes. Com modo daltônico.`,
			// 	slides: ['/explode_asteroids/slide1.png'],
			// 	link: [
			// 		{
			// 			href: {
			// 				[OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.ChroniclesGameStudio.ExplodeAsteroids',
			// 			},
			// 			text: "Acessar"
			// 		},
			// 		{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
			// 	]
			// }
		]
	},
	{
		id: 'experiences',
		content: [
			{
				id: 0,
				title: 'LOUD Lendas do Futebol — 2023',
				img: '/loud-league/logo.png',
				content: loudLeague,
				slides: [
					'https://www.youtube.com/embed/KdrcnifxInk',
					'/loud-league/1.png',
					'/loud-league/2.png',
					'/loud-league/3.png',
					'/loud-league/4.png',
					'/loud-league/5.png',
					'/loud-league/6.png',
					'/loud-league/7.png',
				],
				link: [
					{ href: { [OS.Desktop]: 'https://www.roblox.com/groups/33292168/LOUD-GG' }, text: "Acessar" },
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			{
				id: 1,
				title: 'Sportv Land — 2022',
				img: 'https://tr.rbxcdn.com/7b2105ef8eb79214b4fb95c6b6a6702b/512/512/Image/Png',
				content: sportvLand,
				slides: [
					'https://www.youtube.com/embed/p8ATWn6VMNY',
					'https://tr.rbxcdn.com/f5462c3e650074338dc7a11f2a999fcd/768/432/Image/Png',
					'https://tr.rbxcdn.com/56ba36f6cc763e00ad521ceb375fa721/768/432/Image/Png',
					'https://tr.rbxcdn.com/76090c07aabe4400770e6871bc7965a2/768/432/Image/Png',
					'https://tr.rbxcdn.com/5bb27b937ff091453d8263dd5e1b7a8b/768/432/Image/Png',
				],
				link: [
					{ href: { [OS.Desktop]: 'https://www.roblox.com/games/11512530631/sportv-land' }, text: "Acessar" },
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			// {
			// 	id: 1,
			// 	title: 'CN Meta — 2022',
			// 	img: 'https://www.cnoferta.com.br/img/open-graph-min.jpg?v=2',
			// 	content: `O CN Meta, desenvolvido em parceria com a igreja Comunidade das Nações, é um ambiente virtual do templo religioso onde cultos e apresentações podem ser realizadas de forma virtual, sem perder o toque e o afeto humano, por meio de um ambiente customizado e interativo.`,
			// 	slides: [
			// 		'https://www.cnoferta.com.br/img/open-graph-min.jpg?v=2',
			// 		'https://d9hhrg4mnvzow.cloudfront.net/www.cnmeta.com.br/5c6768ba-bg-hipica-verso_100000000000000000001o.jpg',
			// 		'/cn_meta/slide1.jpeg',
			// 		'/cn_meta/slide2.jpeg',
			// 		'/cn_meta/slide3.jpeg',
			// 		'/cn_meta/slide4.jpeg',
			// 	],
			// 	link: [
			// 		{ href: { [OS.Desktop]: 'https://www.cnmeta.com.br/' }, text: "Acessar" },
			// 		{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
			// 	]
			// },
		]
	}
];
