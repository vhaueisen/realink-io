import db from '$lib/database';
/** @type {import('./__types/[productTypeId]/[productId]').RequestHandler} */
export async function get({ params }: any) {
	const productId = params.productId;
	const item = new db().getProduct(params.productTypeId, productId);
	if (item?.content) {
		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: { item }
		};
	}

	return {
		status: 404
	};
}
