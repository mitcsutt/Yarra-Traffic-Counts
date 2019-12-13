/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */
import View from 'global/components/view';


const Layout = ({ classes, center = false, top = false, bottom = false, children }) => {
	const layoutClassName = classNames(
		'layout',
		classes,
		center && 'layout--center',
		top && 'layout--top',
		bottom && 'layout--bottom');

	const layoutItemClassName = classNames(
		'layout__item',
		center && 'layout__item--center',
		top && 'layout__item--top',
		bottom && 'layout__item--bottom');

	return (<View classes={layoutClassName}>
		<View classes={layoutItemClassName} >
			{children}
		</View>
	</View>);
}
export default Layout;
