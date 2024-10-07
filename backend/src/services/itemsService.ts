import { toCurrency } from '../utils/currency';
import { http } from './http';

interface Price {
	currency: string;
	amount: number;
	decimals: number;
}

interface Item {
	id: string;
	title: string;
	price: Price;
	picture: string;
	condition: string;
	free_shipping: boolean;
}

interface ItemResponse {
	author: {
		name: string;
		lastname: string;
	};
	categories: string[];
	items: Item[];
}

export const fetchItems = async (query: string): Promise<ItemResponse> => {
	const response = await http.get(`/sites/MLB/search?q=${query}&limit=4`);

	return {
		author: {
			name: 'Denis',
			lastname: 'Silva',
		},
		categories:
			response.data.filters[0]?.values[0]?.path_from_root.map(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(cat: any) => cat.name
			) || [],
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		items: response.data.results.map((item: any) => {
			const amount = Math.floor(item.price);
			const decimals = toCurrency(item.price, item.currency_id, 2).slice(-2);

			return {
				id: item.id,
				title: item.title,
				original_price: item.original_price,
				official_store_name: item.official_store_name,
				price: {
					currency: item.currency_id,
					amount,
					decimals,
				},
				picture: item.thumbnail,
				condition: item.condition,
				free_shipping: item.shipping.free_shipping,
			};
		}),
	};
};

export const fetchItemById = async (id: string) => {
	const [itemResponse, descriptionResponse] = await Promise.all([
		http.get(`/items/${id}`),
		http.get(`/items/${id}/description`),
	]);

	const item = itemResponse.data;

	const categoryResponse = await http.get(`/categories/${item.category_id}`);

	const description = descriptionResponse.data;
	const category = categoryResponse.data;

	const amount = Math.floor(item.price);
	const decimals = toCurrency(item.price, item.currency_id, 2).slice(-2);

	return {
		author: {
			name: 'Denis',
			lastname: 'Silva',
		},
		item: {
			id: item.id,
			title: item.title,
			categories:
				category.path_from_root.map(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(cat: any) => cat.name
				) || [],
			price: {
				currency: item.currency_id,
				amount,
				decimals,
			},
			picture: item.pictures[0]?.secure_url || '',
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
			sold_quantity: item.sold_quantity,
			description: description.plain_text,
		},
	};
};
