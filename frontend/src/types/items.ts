export type Itemtype = {
	id: string;
	title: string;
	original_price: number;
	official_store_name: string;
	price: {
		currency: string;
		amount: number;
		decimals: number;
	};
	picture: string;
	condition: string;
	free_shipping: true;
};

export type ItemsListType = {
	author: {
		name: string;
		lastname: string;
	};
	categories: string[];
	items: Itemtype[];
};

export type ItemDetailType = {
	id: string;
	title: string;
	categories: string[];
	price: {
		currency: string;
		amount: number;
		decimals: number;
	};
	picture: string;
	condition: string;
	free_shipping: boolean;
	description: string;
};

export type ItemDetailListType = {
	author: {
		name: string;
		lastname: string;
	};
	item: ItemDetailType;
};
