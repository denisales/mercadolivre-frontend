import React from 'react';

const CardProductRoot = (props: { children: React.ReactNode }) => {
	return <div className="c-card">{props.children}</div>;
};

const CardProductImage = (props: {
	src: string;
	width: number;
	height: number;
	alt?: string;
}) => (
	<figure className="c-card__image">
		<img {...props} />
	</figure>
);

const CardProductInfo = (props: { children: React.ReactNode }) => (
	<div className="c-card__info">{props.children}</div>
);

const CardProductInfoTitle = (props: { children: React.ReactNode }) => (
	<h2 className="c-card__info__title">{props.children}</h2>
);

const CardProductInfoFreeShipping = (props: { children: React.ReactNode }) => (
	<p className="c-card__info__free-shipping">{props.children}</p>
);

const CardProductInfoStoreName = (props: { children: React.ReactNode }) => (
	<span className="c-card__info__store-name">Por {props.children}</span>
);

const CardProductInfoValues = (props: { children: React.ReactNode }) => (
	<div>{props.children}</div>
);

const CardProductInfoValuesPrice = (props: {
	price: string;
	decimal: string | number;
}) => (
	<p className="c-card__info__price">
		{props.price} <span>{props.decimal}</span>
	</p>
);

const CardProductInfoValuesOriginalPrice = (props: {
	children: React.ReactNode;
}) => <s className="c-card__info__old-price">{props.children}</s>;

export const CardProduct = {
	Root: CardProductRoot,
	Image: CardProductImage,
	Info: CardProductInfo,
	InfoTitle: CardProductInfoTitle,
	InfoFreeShipping: CardProductInfoFreeShipping,
	InfoStoreName: CardProductInfoStoreName,
	InfoValues: CardProductInfoValues,
	InfoValuesPrice: CardProductInfoValuesPrice,
	InfoValuesOriginalPrice: CardProductInfoValuesOriginalPrice,
};
