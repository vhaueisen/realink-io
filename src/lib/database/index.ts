import type { IProduct } from '$lib/models/IProduct';
import { Products } from '$lib/models/Products';
export interface IProductResponse {
	cards: string[];
	content: IProduct | undefined;
}

export default class db {
	public getProduct = (productTypeId: string, productId: number): IProductResponse | null => {
		if (!(productTypeId === 'games' || productTypeId === 'metaverse')) return null;
		try {
			const productsOfType = Products.find((p) => p.id === productTypeId);
			return {
				cards: productsOfType?.content.map((p) => p.img) ?? [],
				content: productsOfType?.content[productId]
			};
		} catch {
			return null;
		}
	};
}
