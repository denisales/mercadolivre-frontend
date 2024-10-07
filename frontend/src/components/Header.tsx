import React from 'react';

type HeaderProps = {
	logo: React.ReactNode;
	children: React.ReactNode;
};

export const Header = ({ logo, children }: HeaderProps) => {
	return (
		<header className="c-header">
			<div className="c-header__container">
				{logo}
				{children}
			</div>
		</header>
	);
};
