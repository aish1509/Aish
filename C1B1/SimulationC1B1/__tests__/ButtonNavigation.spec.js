import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {URLS} from '../routes';
import ButtonNavigation from '../index';

describe('<ButtonNavigation />', () => {
	let wrapper = null;
	let mockPath = null;
	let mockHistory = null;
	let mockOnClickHandlerGoOn = null;
	let mockOnClickHandlerStart = null;
	let mockOnClickHandlerStartOver = null;
	let mockOnClickHandlerExit = null;

	beforeEach(() => {
		mockPath = '/explorezone/simulation';
		mockHistory = {
			location: {pathname: '/explorezone/simulation/albumpage'}
		};
		mockOnClickHandlerGoOn = jest.fn();
		mockOnClickHandlerStart = jest.fn();
		mockOnClickHandlerStartOver = jest.fn();
		mockOnClickHandlerExit = jest.fn();
	});

	describe('function props are passed in', () => {
		wrapper = shallow(
			<ButtonNavigation path={mockPath} history={mockHistory} />
		);
	});

	it('should render correctly', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('should render video page', () => {
		mockHistory = {
			location: {pathname: `/explorezone/simulation/${URLS.VIDEO}`}
		};
		wrapper.setProps({history: mockHistory});
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	const buttonComp = wrapper.find('MathButton');
	expect(buttonComp).toHaveLength(1);
	//const mathbutton = wrapper.find('MathButton');
	it('onClickHandler fires correctly', () => {
		buttonComp
			.find('[data-testid="Button-Go-On"]')
			.prop('onClickHandler')();
		expect(mockOnClickHandlerGoOn).toHaveBeenCalled();
	});
	it('onClickHandler fires correctly', () => {
		buttonComp.find('[data-testid="Button-Exit"]').prop('onClickHandler')();
		expect(mockOnClickHandlerExit).toHaveBeenCalled();
	});
	it('onClickHandler fires correctly', () => {
		buttonComp
			.find('[data-testid="Button-StartOver"]')
			.prop('onClickHandler')();
		expect(mockOnClickHandlerStartOver).toHaveBeenCalled();
	});
	it('onClickHandler fires correctly', () => {
		buttonComp
			.find('[data-testid="Button-Start"]')
			.prop('onClickHandler')();
		expect(mockOnClickHandlerStart).toHaveBeenCalled();
	});
});
