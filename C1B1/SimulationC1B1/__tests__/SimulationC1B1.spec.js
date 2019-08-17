import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import SimulationC1B1 from '../index';

describe('<SimulationC1B1 />', () => {
	let wrapper = null;
	let mockPath = null;
	let mockHistory = null;

	beforeEach(() => {
		mockPath = '/explorezone/simulation';
		mockHistory = {
			location: {pathname: '/explorezone/simulation/albumpage'}
		};
	});

	describe('function props are passed in', () => {
		beforeEach(() => {
			wrapper = shallow(
				<SimulationC1B1 path={mockPath} history={mockHistory} />
			);
		});

		it('should render correctly', () => {
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});
	});
});
