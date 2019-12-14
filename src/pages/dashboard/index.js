/**
 * External Dependencies
 */
import React, { useEffect, useState } from 'react';
/**
 * Internal Dependencies
 */

import useGetData from 'library/data/hooks/use-get-data';

import Page from 'global/components/page';
import Layout from 'global/components/layout';
import Main from 'global/components/main';
import Card from 'global/components/card';
import Header from 'global/components/header';
import Button from 'global/components/button';
import Graph from 'pages/dashboard/graph';
import Table from 'pages/dashboard/table';


const Dashboard = () => {

	const [viewTable, setViewTable] = useState(false);
	const [data, fetching, getData] = useGetData();

	useEffect(() => {
		getData();
	}, []);

	const changeView = () => {
		setViewTable(!viewTable);
	}

	return (
		<Page classes='page-dashboard'>
			<Layout classes='layout-dashboard' center>
				<Main classes='main-dashboard'>
					<Header type='h1' value='Sample Text'>
						<Button onClick={changeView} classes="header__button">{viewTable ? "Graph" : "Table"}</Button>
					</Header>
					<Card classes='graph-card'>
						{viewTable ? <Table data={data}></Table> : <Graph data={data}></Graph>}

					</Card>
				</Main>
			</Layout>
		</Page>);
}
export default Dashboard;
