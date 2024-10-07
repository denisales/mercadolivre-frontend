import { RouteObject } from 'react-router-dom';
import { Template } from './pages/Template';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Search } from './pages/Search';

export const routes = [
	{
		path: '/',
		element: <Template />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/items',
				element: <Search />,
			},
			{
				path: '/items/:id',
				element: <Detail />,
			},
		],
	},
] as RouteObject[];
