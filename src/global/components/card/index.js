/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */
import View from 'global/components/view';


const Card = ({ classes, children }) => {
	const cardClassName = classNames('card', classes);

	return (
		<View classes={cardClassName}>
			{children}
		</View>);
}
export default Card;
