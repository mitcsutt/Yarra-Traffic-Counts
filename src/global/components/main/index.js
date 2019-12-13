/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */
import View from 'global/components/view';


const Main = ({ classes, children }) => {
	const mainClassName = classNames('main', classes);

	return (
		<View classes={mainClassName}>
			{children}
		</View>);
}
export default Main;
