import type { IProduct } from '$lib/models/IProduct';
import { Products } from '$lib/models/Products';
import { Links } from '$lib/models/Links';

export interface IProductResponse {
	cards: string[];
	content: IProduct | undefined;
}

export default class db {
	public getProduct = (productTypeId: string, productId: string): IProductResponse | null => {
		const productsOfType = Products.find((p) => p.id === productTypeId);
		return {
			cards: productsOfType?.content.map((p) => p.img) ?? [],
			content: productsOfType?.content[parseInt(productId) ?? 0]
		};
	};

	public getLinks = (productId: string): any => {
		return Links.find((l) => l.id === productId);
	}
}
