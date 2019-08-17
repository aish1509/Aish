import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Logout, {useStyles} from '../Logout';

describe('<Logout />', () => {
	let wrapper = null;
	let mockOnLogout = null;
	let mockEvent = null;

	beforeEach(() => {
		mockOnLogout = jest.fn();
		mockEvent = {
			preventDefault: jest.fn()
		};
		wrapper = shallow(
			<Logout lastName="Doe" firstName="John" onLogout={mockOnLogout} />
		);
	});

	it('should render correctly', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('handleClick', () => {
		wrapper.find('button').simulate('click', mockEvent);
		expect(mockEvent.preventDefault).toHaveBeenCalled();
		expect(mockOnLogout).toHaveBeenCalled();
	});

	it('styles matches snapshot', () => {
		expect(useStyles()).toMatchSnapshot();
	});
});
