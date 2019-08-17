import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import SettingsIcon from '../index';

storiesOf('common/SettingsIcon', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [SettingsIcon]
		}
	})
	.addWithJSX('SettingsIcon', () => <SettingsIcon onSettingsClick={action('onSettingsClick')} />);
