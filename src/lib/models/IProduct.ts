import type { ILink } from "$lib/Utils/Link";

export interface IProduct {
	title: string;
	img: string;
	content: string;
	slides: string[];
	link: ILink[];
	id: number;
}
