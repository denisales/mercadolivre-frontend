import React, { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	rightSlot?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ rightSlot, className, ...props }, ref) => {
		return (
			<div className="c-input">
				<input ref={ref} className={className} {...props} />
				{rightSlot && <div className="c-input__right-slot">{rightSlot}</div>}
			</div>
		);
	}
);
