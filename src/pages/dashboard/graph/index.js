/**
 * External Dependencies
 */
import React, { useEffect } from 'react';
/**
 * Internal Dependencies
 */
import View from 'global/components/view';
import useGetData from 'library/data/hooks/use-get-data';

const Graph = () => {
	const [data, fetching, getData] = useGetData();

	useEffect(() => {
		getData();
	}, []);

	return (
		<View classes='view-graph'>
			Hello
		</View>);
}
export default Graph;
