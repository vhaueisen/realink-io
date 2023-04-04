import db from "$lib/database";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
    const item = new db().getLinks(params.productId);
    if (item)
        return item;
    throw error(404, 'Not found');
}
