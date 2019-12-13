/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */

const H1 = ({ classes, value }) => {
	const h1ClassName = classNames('h1', classes);

	return (
		<h1 classes={h1ClassName}>
			{value}
		</h1>);
}
export default H1;
