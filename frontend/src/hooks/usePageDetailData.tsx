import { listProductById } from '@/repositories/productsRepository';
import { ItemDetailListType } from '@/types/items';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export const usePageDetailData = ({ id }: { id: string }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);
	const [data, setData] = useState<ItemDetailListType | null>(null);

	useEffect(() => {
		async function init() {
			try {
				setLoading(true);
				const resp = await listProductById({ id });
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
	}, [id]);

	return {
		error,
		loading,
		data,
	};
};
