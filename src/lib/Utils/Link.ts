import { getOS, OS } from "$lib/Utils/OS";

export interface ILink {
    href: {
        [OS.Android]?: string;
        [OS.iOS]?: string;
        [OS.Windows_Phone]?: string;
        [OS.Desktop]: string;
    };
    text: string;
}

export const resolve = (link: ILink): string => {
    return link.href[getOS()] ?? link.href[OS.Desktop];
}
