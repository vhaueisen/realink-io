import { e as error } from './index2-1a2749b7.js';

const neco = `**Boneco Neco: Aventuras na Terra Capixaba** acompanha o personagem Neco e seu fiel amigo, o Burrinho Jil\xF3, ambos personagens do [Grupo Estripolia](https://grupoestripolia.com.br/), em uma aventura pelas montanhas e praias do Esp\xEDrito Santo. Colete produtos culturais e se divirta!

O Grupo Estripolia \xE9 uma banda de m\xFAsica infantis capixaba, sediada em Vila Velha, Esp\xEDrito Santo, Brasil. Conhe\xE7a as m\xFAsicas e videoclipes do grupo no **[YouTube](https://www.youtube.com/channel/UCa3xMgFYlIKL5dkkmbWFw0g)** e no **[Spotify](https://open.spotify.com/album/7cmeRk4Mf2LYDPL3rPqe0H?hc_ref=)**.`;
const bus = `**Build your bus** \xE9 um projeto de customiza\xE7\xE3o automotiva em parceria com a Storm Comunica\xE7\xE3o e Hangar 426. Nele, \xE9 poss\xEDvel customizar at\xE9 quatro varia\xE7\xF5es de Kombi Volkswagen, alterando cores, estruturas, tipos de rodas e etc. Ao final, \xE9 poss\xEDvel gerar um relat\xF3rio com as escolhas.`;
const colorindo = `O aplicativo **Colorindo a Cultura Capixaba** foi especialmente projetado para que voc\xEA possa relaxar e se divertir colorindo ilustra\xE7\xF5es de tr\xEAs diferentes livros da [Muqueca Editorial](https://muquecaeditorial.com.br/).
As obras foram selecionadas com muito carinho pelo nosso time, s\xE3o elas: Uma Casinha L\xE1 no Alto (2013), O P\xE1ssaro de Fogo (2020), e O Mosquit\xE3o Malvad\xE3o e a Gatinha Dengosa (2015).
Al\xE9m de colorir, voc\xEA poder\xE1 escanear a capa do livro com o aplicativo **Colorindo a Cultura Capixaba**, o que libera recursos exclusivos de realidade aumentada \u2014 experimente, e se surpreenda!
Prepare os l\xE1pis e as tintas, e m\xE3os \xE0 obra! Divirta-se!

## **DESTAQUES**
- Aplicativo livre de an\xFAncios.
- Tr\xEAs livros completos para colorir.
- 30 ilustra\xE7\xF5es dispon\xEDveis gratuitamente.
- Mais de 60 p\xE1ginas de ilustra\xE7\xF5es exclusivas.
- Aplicativo dispon\xEDvel em portugu\xEAs , ingl\xEAs e espanhol.
- Explore a sua imagina\xE7\xE3o e criatividade.
- Descubra os monumentos e lendas mais famosas do Esp\xEDrito Santo, Brasil.
- Contribua com a Literatura Capixaba, compre as hist\xF3rias e leia com a sua fam\xEDlia.

## **FUNCIONALIDADES**
- Use o baldinho de tinta para preenchimento de cor com apenas um toque.
- Arraste o dedo para colorir usando o pincel.
- Paletas de at\xE9 120 cores.
- Compartilhe suas obras de arte nas redes sociais.
- Salvamento autom\xE1tico das obras de arte.`;
const wings = `**Hyperlight Wings** \xE9 uma experi\xEAncia de batalha de avi\xF5es para a plataforma Roblox! Junte-se a seus amigos ou jogue com jogadores de todo o mundo. Compre novos avi\xF5es e personalize-os como quiser, usando cores, materiais, patterns, acess\xF3rios e novos tipos de muni\xE7\xE3o. At\xE9 10 jogadores por partida.`;
const sportvLand = `Bem-vindo \xE0 **SporTV Land!**
Aqui voc\xEA pode se divertir com seus amigos, coletar moedas pelo mapa, participar de desafios como o **Cabeceio**, **Labirinto** e **Altinha**. Voc\xEA tamb\xE9m pode aproveitar uma bela praia, subir na **Roda Gigante**, nadar no **Lago**, saltar sobre as **Bouncing Bubbles**, al\xE9m de coletar diversos itens especiais como **Pipocas**, **Bal\xF5es**, **Churrasco**, entre outros.

Se quiser provar as suas habilidades, a **SporTV Arena** \xE9 o lugar ideal para voc\xEA! Jogue uma partida de futebol com seus amigos pra valer!

Conhe\xE7a tamb\xE9m o **Est\xFAdio SporTV**, l\xE1 voc\xEA pode descobrir como s\xE3o os bastidores de uma grava\xE7\xE3o e utilizar a c\xE2mera para gravar os seus amigos!`;
var OS = /* @__PURE__ */ ((OS2) => {
  OS2[OS2["Windows_Phone"] = 0] = "Windows_Phone";
  OS2[OS2["Android"] = 1] = "Android";
  OS2[OS2["iOS"] = 2] = "iOS";
  OS2[OS2["Desktop"] = 3] = "Desktop";
  return OS2;
})(OS || {});
const Products = [
  {
    id: "games",
    content: [
      {
        id: 0,
        title: "Hyperlight Wings \u2014 2021",
        img: "https://realink.io/hyperlight_wings/slide1.png",
        content: wings,
        slides: ["https://www.youtube.com/embed/6JXtxsXj0jM", "/hyperlight_wings/slide1.png"],
        link: [
          { href: { [OS.Desktop]: "https://www.roblox.com/games/6882790797/Hyperlight-Wings-Alpha" }, text: "Acessar" },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      },
      {
        id: 1,
        title: "Colorindo a Cultura Capixaba \u2014 2021",
        img: "https://realink.io/colorindo/icon.png",
        content: colorindo,
        slides: [
          "https://www.youtube.com/embed/52brkRRCUrk",
          "https://www.youtube.com/embed/BPoiooYzOzM",
          "https://www.youtube.com/embed/EAiJ2s8gEes",
          "/colorindo/slide1.png"
        ],
        link: [
          {
            href: {
              [OS.Desktop]: "https://play.google.com/store/apps/details?id=com.BardoSolutions.Coloring.MuquecaEditorial",
              [OS.iOS]: "https://apps.apple.com/us/app/colorindo-a-cultura-capixaba/id1563589901"
            },
            text: "Acessar"
          },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      },
      {
        id: 2,
        title: "Boneco Neco \u2014 2021",
        img: "https://realink.io/boneco_neco/icon.png",
        content: neco,
        slides: ["https://www.youtube.com/embed/yd1TM-PTGBI", "/boneco_neco/slide1.png"],
        link: [
          {
            href: {
              [OS.Android]: "https://play.google.com/store/apps/details?id=com.BardoSolutions.EndlessRunner.GrupoEstripolia",
              [OS.Desktop]: "https://grupoestripolia.com.br/jogo/",
              [OS.iOS]: "https://apps.apple.com/us/app/boneco-neco/id1585767464"
            },
            text: "Acessar"
          },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      },
      {
        id: 3,
        title: "Explode Asteroids \u2014 2017",
        img: "https://realink.io/explode_asteroids/icon.webp",
        content: `Embarque em uma jornada pelo espa\xE7o e destrua todos os asteroides! Use seu blaster de nave espacial para destruir os asteroides de todas as cores. Ganhe moedas e compre at\xE9 12 naves espaciais \xFAnicas e 12 proj\xE9teis diferentes. Com modo dalt\xF4nico.`,
        slides: ["/explode_asteroids/slide1.png"],
        link: [
          {
            href: {
              [OS.Desktop]: "https://play.google.com/store/apps/details?id=com.ChroniclesGameStudio.ExplodeAsteroids"
            },
            text: "Acessar"
          },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      }
    ]
  },
  {
    id: "metaverse",
    content: [
      {
        id: 0,
        title: "Sportv Land \u2014 2022",
        img: "https://tr.rbxcdn.com/7b2105ef8eb79214b4fb95c6b6a6702b/512/512/Image/Png",
        content: sportvLand,
        slides: [
          "https://www.youtube.com/embed/p8ATWn6VMNY",
          "https://tr.rbxcdn.com/f5462c3e650074338dc7a11f2a999fcd/768/432/Image/Png",
          "https://tr.rbxcdn.com/56ba36f6cc763e00ad521ceb375fa721/768/432/Image/Png",
          "https://tr.rbxcdn.com/76090c07aabe4400770e6871bc7965a2/768/432/Image/Png",
          "https://tr.rbxcdn.com/5bb27b937ff091453d8263dd5e1b7a8b/768/432/Image/Png"
        ],
        link: [
          { href: { [OS.Desktop]: "https://www.roblox.com/games/11512530631/sportv-land" }, text: "Acessar" },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      },
      {
        id: 1,
        title: "CN Meta \u2014 2022",
        img: "https://www.cnoferta.com.br/img/open-graph-min.jpg?v=2",
        content: `O CN Meta, desenvolvido em parceria com a igreja Comunidade das Na\xE7\xF5es, \xE9 um ambiente virtual do templo religioso onde cultos e apresenta\xE7\xF5es podem ser realizadas de forma virtual, sem perder o toque e o afeto humano, por meio de um ambiente customizado e interativo.`,
        slides: [
          "https://www.cnoferta.com.br/img/open-graph-min.jpg?v=2",
          "https://d9hhrg4mnvzow.cloudfront.net/www.cnmeta.com.br/5c6768ba-bg-hipica-verso_100000000000000000001o.jpg",
          "/cn_meta/slide1.jpeg",
          "/cn_meta/slide2.jpeg",
          "/cn_meta/slide3.jpeg",
          "/cn_meta/slide4.jpeg"
        ],
        link: [
          { href: { [OS.Desktop]: "https://www.cnmeta.com.br/" }, text: "Acessar" },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      },
      {
        id: 2,
        title: "Build your Bus \u2014 2021",
        img: "https://realink.io/build_your_bus/icon.png",
        content: bus,
        slides: [
          "https://www.youtube.com/embed/EcDt-3oPS_g",
          "/build_your_bus/slide1.png"
        ],
        link: [
          { href: { [OS.Desktop]: "https://storm.realink.io/" }, text: "Acessar" },
          { href: { [OS.Desktop]: "/quote" }, text: "Contato" }
        ]
      }
    ]
  }
];
class db {
  getProduct = (productTypeId, productId) => {
    const productsOfType = Products.find((p) => p.id === productTypeId);
    return {
      cards: (productsOfType == null ? void 0 : productsOfType.content.map((p) => p.img)) ?? [],
      content: productsOfType == null ? void 0 : productsOfType.content[parseInt(productId) ?? 0]
    };
  };
}
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

const index = 3;
const component = async () => (await import('./_page.svelte-186688b4.js')).default;
const file = '_app/immutable/components/pages/product/_productTypeId_/_productId_/_page.svelte-bb641c4b.js';
const imports = ["_app/immutable/components/pages/product/_productTypeId_/_productId_/_page.svelte-bb641c4b.js","_app/immutable/chunks/index-57f83b02.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/Button-fa517738.js","_app/immutable/modules/pages/product/_productTypeId_/_productId_/_page.ts-20877beb.js","_app/immutable/chunks/_page-44d4a284.js","_app/immutable/chunks/OS-34bd786a.js","_app/immutable/chunks/control-03134885.js"];
const stylesheets = ["_app/immutable/assets/_page-372b693c.css","_app/immutable/assets/Button-dcf7fb3b.css"];

export { component, file, imports, index, _page_ts as shared, stylesheets };
//# sourceMappingURL=3-a3c6164a.js.map
