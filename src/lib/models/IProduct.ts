import type { ISlide } from '$lib/models/ISlide';

export interface IProduct {
	title: string;
	img: string;
	content: string;
	slides: ISlide[];
	id: number;
}
