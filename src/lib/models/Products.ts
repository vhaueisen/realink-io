import { neco } from '$lib/models/BonecoNeco';
import { bus } from '$lib/models/BuildYourBus';
import { colorindo } from '$lib/models/Colorindo';
import { wings } from '$lib/models/HyperlightWings';
import type { IProduct } from '$lib/models/IProduct';
import { OS } from '$lib/Utils/OS';

export const Products: Array<{ id: string; content: IProduct[] }> = [
	{
		id: 'games',
		content: [
			{
				id: 0,
				title: 'Hyperlight Wings — 2021',
				img: '/hyperlight_wings/slide1.png',
				content: wings,
				slides: ['/hyperlight_wings/slide1.png'],
				link: [
					{ href: { [OS.Desktop]: 'https://www.roblox.com/games/6882790797/Hyperlight-Wings-Alpha' }, text: "Acessar" },
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			{
				id: 1,
				title: 'Colorindo a Cultura Capixaba — 2021',
				img: '/colorindo/icon.png',
				content: colorindo,
				slides: ['/colorindo/slide1.png'],
				link: [
					{
						href: {
							[OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.BardoSolutions.Coloring.MuquecaEditorial',
							[OS.iOS]: 'https://apps.apple.com/us/app/colorindo-a-cultura-capixaba/id1563589901'
						},
						text: "Acessar"
					},
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			{
				id: 2,
				title: 'Boneco Neco — 2021',
				img: '/boneco_neco/icon.png',
				content: neco,
				slides: ['/boneco_neco/slide1.png'],
				link: [
					{
						href: {
							[OS.Android]: 'https://play.google.com/store/apps/details?id=com.BardoSolutions.EndlessRunner.GrupoEstripolia',
							[OS.Desktop]: 'https://grupoestripolia.com.br/jogo/',
							[OS.iOS]: 'https://apps.apple.com/us/app/boneco-neco/id1585767464'
						},
						text: "Acessar"
					},
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			{
				id: 3,
				title: 'Explode Asteroids — 2017',
				img: '/explode_asteroids/icon.webp',
				content: `Embarque em uma jornada pelo espaço e destrua todos os asteroides! Use seu blaster de nave espacial para destruir os asteroides de todas as cores. Ganhe moedas e compre até 12 naves espaciais únicas e 12 projéteis diferentes. Com modo daltônico.`,
				slides: ['/explode_asteroids/slide1.png'],
				link: [
					{
						href: {
							[OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.ChroniclesGameStudio.ExplodeAsteroids',
						},
						text: "Acessar"
					},
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			}
		]
	},
	{
		id: 'metaverse',
		content: [
			{
				id: 0,
				title: 'CN Meta — 2022',
				img: 'https://www.cnoferta.com.br/img/open-graph-min.jpg?v=2',
				content: `O CN Meta, desenvolvido em parceria com a igreja Comunidade das Nações, é um ambiente virtual do templo religioso onde cultos e apresentações podem ser realizadas de forma virtual, sem perder o toque e o afeto humano, por meio de um ambiente customizado e interativo.`,
				slides: [
					'https://www.cnoferta.com.br/img/open-graph-min.jpg?v=2',
					'https://d9hhrg4mnvzow.cloudfront.net/www.cnmeta.com.br/5c6768ba-bg-hipica-verso_100000000000000000001o.jpg',
					'/cn_meta/slide1.jpeg',
					'/cn_meta/slide2.jpeg',
					'/cn_meta/slide3.jpeg',
					'/cn_meta/slide4.jpeg',
				],
				link: [
					{ href: { [OS.Desktop]: 'https://account.altvr.com/worlds/2004110644231537386/spaces/2004111153713643806' }, text: "Acessar" },
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
			{
				id: 1,
				title: 'Build your Bus — 2021',
				img: '/build_your_bus/icon.png',
				content: bus,
				slides: ['/build_your_bus/slide1.png'],
				link: [
					{ href: { [OS.Desktop]: 'https://storm.realink.io/' }, text: "Acessar" },
					{ href: { [OS.Desktop]: '/quote' }, text: "Contato" },
				]
			},
		]
	}
];
