import React from 'react';
import {render, cleanup, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';

import {M180Theme} from '@math/common';
import {DataStore} from '@shared/core';

import SimulationLandingPage from '../index';

describe('<SimulationLandingPage />', () => {
	let mockMatch = null;

	let mockProfile = {
		username: 'username',
		scopes: 'scopes',
		app: 'm180'
	};

	afterEach(cleanup);
	it('SimulationLandingPage page is loading', () => {
		DataStore.set('profile', null);
		mockMatch = {path: ''};
		const {getByText} = render(
			<DataStore.Provider>
				<M180Theme>
					<SimulationLandingPage match={mockMatch} />
				</M180Theme>
			</DataStore.Provider>
		);
		expect(getByText('loading...')).toBeDefined();
	});
	it('SimulationLandingPage renders content correctly', () => {
		DataStore.set('profile', mockProfile);
		mockMatch = {path: ''};
		const {container} = render(
			<DataStore.Provider>
				<M180Theme>
					<SimulationLandingPage match={mockMatch} />
				</M180Theme>
			</DataStore.Provider>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
