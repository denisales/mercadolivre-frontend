import { Request, Response } from 'express';
import { fetchItems, fetchItemById } from '../services/itemsService';

export const getItems = async (req: Request, res: Response): Promise<void> => {
	try {
		const { q } = req.query;
		const items = await fetchItems(q as string);
		res.status(200).json(items);
	} catch (error) {
		const err = error as Error;
		res.status(500).json({ error: true, message: err.message });
	}
};

export const getItemById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		const item = await fetchItemById(id);
		res.status(200).json(item);
	} catch (error) {
		const err = error as Error;
		res.status(500).json({ error: true, message: err.message });
	}
};
