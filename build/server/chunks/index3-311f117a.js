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
      }
    ]
  },
  {
    id: "experiences",
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
      }
    ]
  }
];
const Links = [
  {
    title: "Papa Peixe",
    id: "papapeixe",
    description: "Papa-Peixe \xE9 um jogo eletr\xF4nico do g\xEAnero puzzle casual, focado na cultura do Mato Grosso, que possui dois tipos de jogabilidade: palavras cruzadas e ca\xE7a palavras.",
    img: "https://play-lh.googleusercontent.com/NMSXCfnrzvjna2dxiL1dtIkflfM-_F53LKYB3g51B53nE2WRQJCrB5O8IrbaHBAHTBek",
    links: [
      { href: { [OS.Desktop]: "https://www.instagram.com/peixepapa/" }, text: "Instagram" },
      {
        href: {
          [OS.Desktop]: "https://play.google.com/store/apps/details?id=com.Realink.Words.PapaPeixe",
          [OS.iOS]: "https://apps.apple.com/app/id6447073898"
        },
        text: "Download"
      }
    ]
  },
  {
    title: "Letras e Sons da Natureza",
    id: "letrasesonsdanatureza",
    description: "Jogo educacional que promove alfabetiza\xE7\xE3o e letramento com temas socioculturais.",
    img: "https://play-lh.googleusercontent.com/_-i5xKjQO4fDwmctRdjGHI7ta-rkpHkSrNztYHNFCBMfuz_55jTcK1q1PcNJ2h2BGrI=w240-h480-rw",
    links: [
      { href: { [OS.Desktop]: "https://www.instagram.com/letrasesons_/" }, text: "Instagram" },
      {
        href: {
          [OS.Desktop]: "https://play.google.com/store/apps/details?id=com.Realink.Quiz.AlefBet",
          [OS.iOS]: "https://apps.apple.com/br/app/letras-e-sons-da-natureza/id6452470798"
        },
        text: "Download"
      }
    ]
  },
  {
    title: "Culin\xE1ria Capixaba",
    id: "culinariacapixaba",
    description: "Explore a culin\xE1ria capixaba de forma inovadora com o aplicativo interativo que combina tradi\xE7\xE3o e tecnologia, apresentando receitas aut\xEAnticas atrav\xE9s da realidade aumentada.",
    img: "https://play-lh.googleusercontent.com/xfTxq3DxwNJlhjFI5dTn83LYDFbjRAm-pIhAEdlJBHhYBiDUHpILF0FFNQbs1VH9KM8=w240-h480-rw",
    links: [
      { href: { [OS.Desktop]: "https://www.instagram.com/capixaba.culinaria/" }, text: "Instagram" },
      {
        href: {
          [OS.Desktop]: "https://play.google.com/store/apps/details?id=com.Realink.Persona.CulinariaCapixaba",
          [OS.iOS]: "https://apps.apple.com/br/app/culin%C3%A1ria-capixaba/id6462795816"
        },
        text: "Download"
      }
    ]
  },
  {
    title: "Revolta de Queimados",
    id: "revoltadequeimados",
    description: "Conhe\xE7a Chico Prego, l\xEDder da Revolta de Queimados, em 3D e realidade aumentada.",
    img: "https://play-lh.googleusercontent.com/YIBMkLnc-W90brlLZWFvJuI8IP1sshL0Ir3AJoeVEYHU40v8rYZLNBb5iGjVMt1MvFeW=w240-h480-rw",
    links: [
      {
        href: {
          [OS.Desktop]: "https://play.google.com/store/apps/details?id=com.Realink.Persona.RevoltaDeQueimados",
          [OS.iOS]: "https://apps.apple.com/br/app/revolta-de-queimados/id6462795574"
        },
        text: "Download"
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
  getLinks = (productId) => {
    return Links.find((l) => l.id === productId);
  };
}

export { db as d };
//# sourceMappingURL=index3-311f117a.js.map
