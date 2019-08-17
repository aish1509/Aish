import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import SettingsIcon from '../index';

describe('<SettingsIcon />', () => {
	let wrapper = null;
	let mockOnSettingsClick = null;
	let mockEvent = null;

	beforeEach(() => {
		mockOnSettingsClick = jest.fn();
		mockEvent = {
			preventDefault: jest.fn()
		};

		wrapper = shallow(
			<SettingsIcon
				lastName="Doe"
				firstName="John"
				onSettingsClick={mockOnSettingsClick}
			/>
		);
	});

	it('should render correctly', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('handleClick', () => {
		wrapper.find('WithStyles(ForwardRef(IconButton))').prop('onClick')(
			mockEvent
		);
		expect(mockEvent.preventDefault).toHaveBeenCalled();
		expect(mockOnSettingsClick).toHaveBeenCalled();
	});
});
