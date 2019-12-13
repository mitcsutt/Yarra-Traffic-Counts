/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */
import View from 'global/components/view';
import H1 from 'global/components/typography/h1';


const Header = ({ classes, left = false, value = '', children }) => {
	const headerClassName = classNames('header', classes);
	return (
		<View classes={headerClassName}>
			{left && children}
			<H1 value={value} />
			{!left && children}
		</View>);
}
export default Header;
