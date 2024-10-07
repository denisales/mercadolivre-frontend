type BreadcrumbProps = {
	children: React.ReactNode;
};

const BreadcrumbRoot = ({ children }: BreadcrumbProps) => {
	return <nav className="c-breadcrumb">{children}</nav>;
};

type BreadcrumbItemProps = {
	children: React.ReactNode;
	href?: string;
};

export const BreadcrumbItem = ({ children, href }: BreadcrumbItemProps) => {
	return href ? (
		<a href={href} className="c-breadcrumb__item">
			{children}
		</a>
	) : (
		<span className="c-breadcrumb__item">{children}</span>
	);
};

export const Breadcrumb = {
	Root: BreadcrumbRoot,
	Item: BreadcrumbItem,
};
