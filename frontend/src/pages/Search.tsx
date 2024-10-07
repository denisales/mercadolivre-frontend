import { Link, useSearchParams } from 'react-router-dom';
import { CardProduct } from '@/components/CardProduct';
import { usePageSearchData } from '@/hooks/usePageSearchData';
import { Breadcrumb } from '@/components/Breadcrump';
import { toCurrency } from '@/utils/currency';

export const Search = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('search') || '';

	const { data, loading, error } = usePageSearchData({ query });

	if (loading)
		return (
			<main className="p-search">
				<div className="p-search__container">
					<div className="p-search__loading">
						<h1>Buscando...</h1>
					</div>
				</div>
			</main>
		);

	if (error)
		return (
			<main className="p-search">
				<div className="p-search__container">
					<div className="p-search__error">
						<h1>Algum erro aconteceu</h1>
						<h2>Tente novamente</h2>
					</div>
				</div>
			</main>
		);

	return (
		<>
			{!!data?.categories.length && (
				<Breadcrumb.Root>
					{data?.categories.map((category) => (
						<Breadcrumb.Item href={'#'} key={category}>
							{category}
						</Breadcrumb.Item>
					))}
				</Breadcrumb.Root>
			)}
			<main className="p-search">
				<div className="p-search__container">
					<ol className="p-search__list">
						{data?.items?.length ? (
							data?.items.map((item) => (
								<li
									key={item.id}
									className="p-search__list__item"
									title={item.title}
								>
									<CardProduct.Root>
										<CardProduct.Image
											src={item.picture}
											width={150}
											height={150}
											alt={item.title}
										/>
										<CardProduct.Info>
											<Link to={`/items/${item.id}`}>
												<CardProduct.InfoTitle>
													{item.title}
												</CardProduct.InfoTitle>
											</Link>
											<CardProduct.InfoValues>
												{item.original_price && (
													<CardProduct.InfoValuesOriginalPrice>
														{toCurrency(
															item.original_price,
															item.price.currency,
															2
														)}
													</CardProduct.InfoValuesOriginalPrice>
												)}
												<CardProduct.InfoValuesPrice
													price={toCurrency(
														item.price.amount,
														item.price.currency
													)}
													decimal={item.price.decimals}
												></CardProduct.InfoValuesPrice>
											</CardProduct.InfoValues>
											{item.free_shipping && (
												<CardProduct.InfoFreeShipping>
													Frete grátis
												</CardProduct.InfoFreeShipping>
											)}
											{item.official_store_name && (
												<CardProduct.InfoStoreName>
													{item.official_store_name}
												</CardProduct.InfoStoreName>
											)}
										</CardProduct.Info>
									</CardProduct.Root>
								</li>
							))
						) : (
							<li className="p-search__list__noitems">
								Nenhum produto encontrado
							</li>
						)}
					</ol>
				</div>
			</main>
		</>
	);
};
