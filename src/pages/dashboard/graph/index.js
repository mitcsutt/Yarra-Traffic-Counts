/**
 * External Dependencies
 */
import React, { useEffect } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
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
			<VictoryChart>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },

					}}
					data={data}
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
					x={(data) => new Date(data.date_captured)}
					y="volume_per_day"
				/>
			</VictoryChart>
		</View>);
}
export default Graph;
