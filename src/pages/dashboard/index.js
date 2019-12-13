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
import Header from 'global/components/header';

import Button from 'global/components/button';

import Graph from 'pages/dashboard/graph';


const Dashboard = () => {
	return (
		<Page classes='page-dashboard'>
			<Layout classes='layout-dashboard' center>
				<Main classes='main-dashboard'>
					<Header type='h1' value='Sample Text'>
						<Button classes="header__button" onClick={null}>Button</Button>
					</Header>
					<Graph></Graph>
				</Main>
			</Layout>
		</Page>);
}
export default Dashboard;
