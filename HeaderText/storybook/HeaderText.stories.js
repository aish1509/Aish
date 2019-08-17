import React from 'react';
import {storiesOf} from '@storybook/react';
import HeaderText from '../index';

storiesOf('common/HeaderText', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [HeaderText]
		}
	})
	.addWithJSX('Default', () => <HeaderText>Mock Header Text</HeaderText>)
	.addWithJSX('with subheader text', () => (
		<HeaderText subheaderText="Mock Subheader Text">
			Mock Header Text
		</HeaderText>
	));
