import { Router } from 'express';
import { getItemById, getItems } from '../controllers/itemsController';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItemById);

export default router;
