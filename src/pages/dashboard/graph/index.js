/**
 * External Dependencies
 */
import React from 'react';
import { VictoryChart, VictoryLine, VictoryCursorContainer } from 'victory';
/**
 * Internal Dependencies
 */
import View from 'global/components/view';
import useGetData from 'library/data/hooks/use-get-data';

const Graph = ({ data = [] }) => {

	return (
		<View classes='view-graph'>
			<VictoryChart padding={{ left: 90, top: 50, right: 10, bottom: 50 }} containerComponent={
				<VictoryCursorContainer
					cursorLabel={({ datum }) => `${Math.round(datum.y, 2)}`}
				/>
			}>

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
		</View >);
}
export default Graph;
