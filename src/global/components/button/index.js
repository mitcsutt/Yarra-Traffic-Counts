/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */

const Button = ({ onClick = () => null, classes, type = "", value = "", disabled = false, children }) => {
	const buttonClassName = classNames('button', classes);
	return (
		<button
			className={buttonClassName}
			value={value}
			onClick={onClick}
			disabled={disabled}
			type={type}>
			{children}
		</button>
	);
}
export default Button;
