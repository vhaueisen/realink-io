import { OS } from "$lib/Utils/OS";

export const Links = [
    {
        title: "Trabalhe Conosco",
        id: "vagas",
        description: "Venha trabalhar na Rogue Unit! Estamos sempre em busca de novos talentos para compor nosso time.",
        img: "/logo_h.png",
        links: [
            { href: { [OS.Desktop]: 'https://www.linkedin.com/jobs/view/3823237965' }, text: "Dev. Roblox Jr." },
        ],
    },
    {
        title: "Papa Peixe",
        id: "papapeixe",
        description: "Papa-Peixe é um jogo eletrônico do gênero puzzle casual, focado na cultura do Mato Grosso, que possui dois tipos de jogabilidade: palavras cruzadas e caça palavras.",
        img: "https://play-lh.googleusercontent.com/NMSXCfnrzvjna2dxiL1dtIkflfM-_F53LKYB3g51B53nE2WRQJCrB5O8IrbaHBAHTBek",
        links: [
            { href: { [OS.Desktop]: 'https://www.instagram.com/peixepapa/' }, text: "Instagram" },
            {
                href: {
                    [OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.Realink.Words.PapaPeixe',
                    [OS.iOS]: 'https://apps.apple.com/app/id6447073898'
                }, text: "Download"
            }
        ],
    },
    {
        title: "Letras e Sons da Natureza",
        id: "letrasesonsdanatureza",
        description: "Jogo educacional que promove alfabetização e letramento com temas socioculturais.",
        img: "https://play-lh.googleusercontent.com/_-i5xKjQO4fDwmctRdjGHI7ta-rkpHkSrNztYHNFCBMfuz_55jTcK1q1PcNJ2h2BGrI=w240-h480-rw",
        links: [
            { href: { [OS.Desktop]: 'https://www.instagram.com/letrasesons_/' }, text: "Instagram" },
            {
                href: {
                    [OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.Realink.Quiz.AlefBet',
                    [OS.iOS]: 'https://apps.apple.com/br/app/letras-e-sons-da-natureza/id6452470798'
                }, text: "Download"
            }
        ],
    },
    {
        title: "Culinária Capixaba",
        id: "culinariacapixaba",
        description: "Explore a culinária capixaba de forma inovadora com o aplicativo interativo que combina tradição e tecnologia, apresentando receitas autênticas através da realidade aumentada.",
        img: "https://play-lh.googleusercontent.com/xfTxq3DxwNJlhjFI5dTn83LYDFbjRAm-pIhAEdlJBHhYBiDUHpILF0FFNQbs1VH9KM8=w240-h480-rw",
        links: [
            { href: { [OS.Desktop]: 'https://www.instagram.com/capixaba.culinaria/' }, text: "Instagram" },
            {
                href: {
                    [OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.Realink.Persona.CulinariaCapixaba',
                    [OS.iOS]: 'https://apps.apple.com/br/app/culin%C3%A1ria-capixaba/id6462795816'
                }, text: "Download"
            }
        ],
    },
    {
        title: "Revolta de Queimados",
        id: "revoltadequeimados",
        description: "Conheça Chico Prego, líder da Revolta de Queimados, em 3D e realidade aumentada.",
        img: "https://play-lh.googleusercontent.com/YIBMkLnc-W90brlLZWFvJuI8IP1sshL0Ir3AJoeVEYHU40v8rYZLNBb5iGjVMt1MvFeW=w240-h480-rw",
        links: [
            // { href: { [OS.Desktop]: 'https://www.instagram.com/peixepapa/' }, text: "Instagram" },
            {
                href: {
                    [OS.Desktop]: 'https://play.google.com/store/apps/details?id=com.Realink.Persona.RevoltaDeQueimados',
                    [OS.iOS]: 'https://apps.apple.com/br/app/revolta-de-queimados/id6462795574'
                }, text: "Download"
            }
        ],
    },
]