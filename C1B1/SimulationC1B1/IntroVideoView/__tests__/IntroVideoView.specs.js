import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {act} from 'react-dom/test-utils';

import IntroVideoView from '../index';

describe('<IntroVideoVideo />', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = shallow(
			<IntroVideoView data={{provisionedBlocks: [5], blockIndex: 7}} />
		);
	});
	it('IntroVideoView renders correctly', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
	it('Intro video loads correctly', () => {
		expect(wrapper.find('[data-testid="VideoPlayer"]').exists()).toBe(true);
	});
});
