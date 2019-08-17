import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import ZoneHeader, {useStyles} from '../index';
import {HeaderText} from '@math/common';

describe('<ZoneHeader />', () => {
	let wrapper = null;
	let mockOnLogout = null;
	let mockOnSettingsClick = null;
	let mockOnHomeClick = null;

	beforeEach(() => {
		mockOnLogout = jest.fn();
		mockOnSettingsClick = jest.fn();
		mockOnHomeClick = jest.fn();
		wrapper = shallow(
			<ZoneHeader
				onHomeClick={mockOnHomeClick}
				firstName="John"
				lastName="Doe"
				onLogout={mockOnLogout}
				onSettingsClick={mockOnSettingsClick}
				showSettings
			>
				<HeaderText subheaderText="Block 1: Multiplicative thinking">
					Mock Zone
				</HeaderText>
			</ZoneHeader>
		);
	});

	it('should render correctly', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	// it('handleOnClick', () => {
	// 	wrapper = mount(
	// 		<ZoneHeader
	// 			onHomeClick={mockOnHomeClick}
	// 			firstName="John"
	// 			lastName="Doe"
	// 			onLogout={mockOnLogout}
	// 			onSettingsClick={mockOnSettingsClick}
	// 			showSettings
	// 		>
	// 			<HeaderText subheaderText="Block 1: Multiplicative Thinking">
	// 				Mock Zone
	// 			</HeaderText>
	// 		</ZoneHeader>
	// 	);

	const mockEvent = {
		preventDefault: jest.fn()
	};
	it('handle click', () => {
		const buttonComp = wrapper.find('WithStyles(ForwardRef(IconButton))');
		expect(buttonComp).toHaveLength(1);
		buttonComp.prop('onClick')(mockEvent);
		expect(mockEvent.preventDefault).toHaveBeenCalled();
		expect(mockOnHomeClick).toHaveBeenCalled();
	});

	it('handleLogout', () => {
		wrapper.find('Logout').prop('onLogout')();
		expect(mockOnLogout).toHaveBeenCalled();
	});

	it('handleSettingsClick', () => {
		wrapper.find('SettingsIcon').prop('onSettingsClick')();
		expect(mockOnSettingsClick).toHaveBeenCalled();
	});
});
