import { http } from './http';

export const listProductsBySearch = ({ search }: { search: string }) =>
	http.get('/items', {
		params: {
			q: search,
		},
	});

export const listProductById = ({ id }: { id: string }) =>
	http.get(`/items/${id}`);
