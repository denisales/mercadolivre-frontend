import { Breadcrumb } from '@/components/Breadcrump';
import { Button } from '@/components/Button';
import { usePageDetailData } from '@/hooks/usePageDetailData';
import { toCurrency } from '@/utils/currency';
import { useParams } from 'react-router-dom';

export const Detail = () => {
	const { id } = useParams();

	const { data, loading, error } = usePageDetailData({ id: id! });

	const { item } = data || {};

	if (loading || !item)
		return (
			<main className="p-detail">
				<div className="p-detail__container">
					<h1 className="p-detail__loading">Buscando...</h1>
				</div>
			</main>
		);

	if (error)
		return (
			<main className="p-detail">
				<div className="p-detail__container">
					<div className="p-detail__error">
						<h1>Algum erro aconteceu</h1>
						<h2>Tente novamente</h2>
					</div>
				</div>
			</main>
		);

	return (
		<>
			{!!item?.categories.length && (
				<Breadcrumb.Root>
					{item?.categories.map((category) => (
						<Breadcrumb.Item href={'#'} key={category}>
							{category}
						</Breadcrumb.Item>
					))}
				</Breadcrumb.Root>
			)}
			<main className="p-detail">
				<div className="p-detail__container">
					<div className="p-detail__card">
						<figure className="p-detail__card__image">
							<img
								src={item?.picture}
								alt={item?.title}
								title={item?.title}
								width={300}
								height={300}
							/>
						</figure>
						<div className="p-detail__card__info">
							<h1 className="p-detail__card__info__title">{item?.title}</h1>
							<p className="p-detail__card__info__price">
								{toCurrency(item!.price.amount, item!.price.currency)}
								<span>{item?.price.decimals}</span>
							</p>
							<Button>Comprar</Button>
						</div>
						<div className="p-detail__card__footer">
							<h3 className="p-detail__card__footer__title">
								Descrição do produto
							</h3>
							{item?.description}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
