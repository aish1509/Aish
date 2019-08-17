import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';

import {NAVIGATION} from '../../../constants';

import ZoneHeader from '../index';
import {HeaderText} from '@math/common';

storiesOf('m180/ZoneHeader', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [ZoneHeader]
		}
	})
	.addWithJSX('Explore Zone', () => (
		<ZoneHeader
			zoneName={NAVIGATION.exploreZone}
			onHomeClick={action('onHomeClicked')}
		>
			<HeaderText subheaderText="Block 1: Rates in Time">
				Explore Zone
			</HeaderText>
		</ZoneHeader>
	))
	.addWithJSX('Fast Track', () => (
		<ZoneHeader
			zoneName={NAVIGATION.fastTrack}
			onHomeClick={action('onHomeClicked')}
		>
			<HeaderText subheaderText="Block 1: Rates in Time">
				Fast Track
			</HeaderText>
		</ZoneHeader>
	))
	.addWithJSX('Learn Zone', () => (
		<ZoneHeader
			zoneName={NAVIGATION.learnZone}
			onHomeClick={action('onHomeClicked')}
		>
			<HeaderText subheaderText="Block 1: Rates in Time">
				Learn Zone
			</HeaderText>
		</ZoneHeader>
	))
	.addWithJSX('Success Zone', () => (
		<ZoneHeader
			zoneName={NAVIGATION.successZone}
			onHomeClick={action('onHomeClicked')}
		>
			<HeaderText subheaderText="Block 1: Rates in Time">
				Success Zone
			</HeaderText>
		</ZoneHeader>
	));
