import React from 'react';
import {DataStore} from '@shared/core';
import {Layout} from '@math/m180';
import Header from '../../utils/Header';
import history from '../../utils/history';
import {SimulationC1B1} from '../../C1B1';

const SimulationLandingPage = props => {
	const loading = () => <div>loading...</div>;
	const pathname = props.match.path;

	const ready = profile => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '85vh',
				position: 'relative'
			}}
		>
			<SimulationC1B1 path={pathname} history={history} />
		</div>
	);
	const page = ({profile}) => (profile ? ready(profile) : loading());

	return (
		<Layout>
			<Header pathname={pathname} />
			<DataStore.Subscribe>
				{({state}) => page(state)}
			</DataStore.Subscribe>
		</Layout>
	);
};

export default SimulationLandingPage;
