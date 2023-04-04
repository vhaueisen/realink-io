import { OS } from "$lib/Utils/OS";

export const Links = [{
    title: "Papa Peixe",
    id: "papapeixe",
    description: "Papa Peixe",
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
}]