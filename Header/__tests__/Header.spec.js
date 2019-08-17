import {mount, shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import React from 'react';
import history from '../../history';

import Header from '../index';

jest.mock('../../history');

describe('<Header />', () => {
	let wrapper = null;

	describe('mount component', () => {
		beforeEach(() => {
			wrapper = shallow(<Header pathname="/explorezone" />);
		});

		it('watch snapshot', () => {
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});

		it('verify when pathname is cat', () => {
			wrapper.setProps({pathname: '/cat'});
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});

		it('verify when pathname is /explorezone/anchorvideo', () => {
			wrapper.setProps({pathname: '/explorezone/anchorvideo'});
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});

		it('verify when pathname is /explorezone/simulation', () => {
			wrapper.setProps({pathname: '/explorezone/simulation'});
			expect(shallowToJson(wrapper)).toMatchSnapshot();
		});
	});

	describe('mount component', () => {
		beforeEach(() => {
			wrapper = mount(<Header pathname="/explorezone" />);
		});

		it('history.push should have been called with /welcome', () => {
			const IconButtonComp = wrapper.find(
				'WithStyles(ForwardRef(IconButton))'
			);
			expect(IconButtonComp).toHaveLength(1);
			IconButtonComp.simulate('click');
			expect(history.push).toHaveBeenCalledWith('/welcome');
		});
	});
});
