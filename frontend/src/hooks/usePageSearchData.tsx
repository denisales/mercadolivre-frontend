import { listProductsBySearch } from '@/repositories/productsRepository';
import { ItemsListType } from '@/types/items';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export const usePageSearchData = ({ query }: { query: string }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);
	const [data, setData] = useState<ItemsListType | null>(null);

	useEffect(() => {
		async function init() {
			try {
				setLoading(true);
				const resp = await listProductsBySearch({ search: query });
				setData(resp.data);
				setError(null);
			} catch (error) {
				setData(null);
				setError(error as AxiosError);
			} finally {
				setLoading(false);
			}
		}
		init();
	}, [query]);

	return {
		error,
		loading,
		data,
	};
};
