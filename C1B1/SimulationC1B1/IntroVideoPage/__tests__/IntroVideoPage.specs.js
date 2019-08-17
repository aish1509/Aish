import {mount, shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import React from 'react';

import {M180Theme} from '@math/common';
import {DataStore} from '@shared/core';
import IntroVideoPage from '../index';

jest.mock('@shared/core', () => ({
	DataStore: jest.requireActual('@shared/core').DataStore,
	Logger: {
		log: jest.fn()
	}
}));
jest.mock('@math/app-m180/src/pages/mock.json');

describe('<IntroVideoPage />', () => {
	let wrapper = null;
	let mockMatch = null;

	let mockProfile = {
		username: 'username',
		scopes: 'scopes',
		app: 'm180'
	};

	describe('The page', () => {
		beforeEach(() => {
			mockMatch = {path: ''};
		});
		it('loading correctly', async () => {
			await expect(DataStore.set('profile', null)).resolves.toStrictEqual(
				null
			);
			wrapper = mount(
				<DataStore.Provider>
					<M180Theme>
						<IntroVideoPage match={mockMatch} />
					</M180Theme>
				</DataStore.Provider>
			);
			expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
		});
		it('renders correctly', () => {
			wrapper = shallow(<IntroVideoPage match={mockMatch} />);
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});

		describe('mount component with DataStore.Provider', () => {
			beforeEach(async () => {
				await expect(
					DataStore.set('profile', mockProfile)
				).resolves.toStrictEqual(mockProfile);
				wrapper = mount(
					<DataStore.Provider>
						<M180Theme>
							<IntroVideoPage match={mockMatch} />
						</M180Theme>
					</DataStore.Provider>
				);
			});
		});
	});
});
