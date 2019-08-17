import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import HeaderText from '../HeaderText';

describe('<HeaderText />', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = shallow(<HeaderText>mock header text</HeaderText>);
	});

	it('should render correctly with default props', () => {
		expect(shallowToJson(wrapper.dive())).toMatchSnapshot();
	});

	it('should render correctly with subHeaderText set', () => {
		wrapper.setProps({
			subheaderText: 'mockSubheaderText'
		});
		expect(shallowToJson(wrapper.dive())).toMatchSnapshot();
	});
});
