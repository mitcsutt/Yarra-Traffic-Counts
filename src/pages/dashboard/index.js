/**
 * External Dependencies
 */
import React, { useState } from 'react';
/**
 * Internal Dependencies
 */
import Page from 'global/components/page';
import Layout from 'global/components/layout';
import Main from 'global/components/main';
import Button from 'global/components/button';

import Graph from 'pages/dashboard/graph';


const Dashboard = () => {
	return (
		<Page classes='page-dashboard'>
			<Layout classes='layout-dashboard' center>
				<Main classes='main-dashboard'>

					<Graph></Graph>
				</Main>
			</Layout>
		</Page>);
}
export default Dashboard;
