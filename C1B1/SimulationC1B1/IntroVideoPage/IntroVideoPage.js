import React, {useCallback} from 'react';
import {DataStore} from '@shared/core';
import IntroVideoView from '../IntroVideoView';
import {Layout} from '@math/m180';
import mockJSON from '../../../pages/mock.json';

const IntroVideoPage = () => {
	const loading = () => <div data-testid="loading">loading...</div>;
	const ready = useCallback(
		profile => (
			<IntroVideoView data-testid="IntroVideoView" data={profile} />
		),
		[]
	);
	// {provisionedBlocks: [], blockIndex: null} has been added as a mock data, once proper API implemented, This needs to be removed

	const page = ({profile}) =>
		profile
			? ready({
					...mockJSON,
					...profile
			  })
			: loading();
	return (
		<Layout>
			<DataStore.Subscribe>
				{({state}) => page(state)}
			</DataStore.Subscribe>
		</Layout>
	);
};

export default IntroVideoPage;
