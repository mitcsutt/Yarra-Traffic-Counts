/**
 * External Dependencies
 */
import React from 'react';
import classNames from 'classnames';
/**
 * Internal Dependencies
 */
import View from 'global/components/view';

const Page = ({ classes, children }) => {
	const pageClassName = classNames('page', classes);
	return (<View classes={pageClassName}>{children}</View>);
}
export default Page;
