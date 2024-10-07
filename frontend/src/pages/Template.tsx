import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Form, Link, Outlet } from 'react-router-dom';

export const Template = () => {
	return (
		<>
			<Header
				logo={
					<Link to="/" title="Mercado livre" className="u-logo">
						Mercado Livre
					</Link>
				}
			>
				<Form action="/items" method="get">
					<Input
						type="search"
						name="search"
						placeholder="Buscar produtos, marcas e muito mais..."
						rightSlot={
							<button
								title="Buscar"
								type="submit"
								className="u-button-search"
								aria-label="Buscar"
							/>
						}
					/>
				</Form>
			</Header>
			<Outlet />
		</>
	);
};
