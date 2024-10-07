export const toCurrency = (
	value: number,
	currencySymbol: string,
	decimalPlaces: number = 0
): string => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: currencySymbol,
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	}).format(value);
};
