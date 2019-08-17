import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import MathButton, {useStyles} from '../MathButton';

describe('<MathButton />', () => {
	let wrapper = null;

	let mockClickHandler = null;
	let mockEvent = null;

	beforeEach(() => {
		mockClickHandler = jest.fn();
		mockEvent = {preventDefault: jest.fn()};
		wrapper = shallow(
			<MathButton onClickHandler={mockClickHandler}>Go On</MathButton>
		);
	});

	describe('is not disabled', () => {
		beforeEach(() => {
			wrapper.setProps({disabled: false});
		});

		it('should render correctly', () => {
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});

		it('handleButtonClick', () => {
			const buttonComp = wrapper.find('button');
			buttonComp.simulate('click', mockEvent);
			expect(mockEvent.preventDefault).toHaveBeenCalled();
			expect(mockClickHandler).toHaveBeenCalled();
		});
	});

	describe('is disabled', () => {
		beforeEach(() => {
			wrapper.setProps({disabled: true});
		});

		it('should render correctly', () => {
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});
	});

	describe('useStyles', () => {
		describe('primary', () => {
			it('enabled', () => {
				expect(
					useStyles().button({disabled: false, secondary: false})
				).toMatchSnapshot();
			});

			it('disabled', () => {
				expect(
					useStyles().button({disabled: true, secondary: false})
				).toMatchSnapshot();
			});
		});

		describe('secondary', () => {
			it('enabled', () => {
				expect(
					useStyles().button({disabled: false, secondary: true})
				).toMatchSnapshot();
			});

			it('disabled', () => {
				expect(
					useStyles().button({disabled: true, secondary: true})
				).toMatchSnapshot();
			});
		});

		it('with buttonStyleModifier', () => {
			expect(
				useStyles().button({
					buttonStyleModifier: {width: '100px', height: '100px'},
					disabled: false,
					secondary: false
				})
			).toMatchSnapshot();
		});
	});
});
