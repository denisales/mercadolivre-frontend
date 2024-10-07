import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import itemsRoutes from './routes/itemsRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoutes);

export default app;
