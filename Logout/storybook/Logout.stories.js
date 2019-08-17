import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import Logout from '../index';

storiesOf('common/Logout', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [Logout]
		}
	})
	.addWithJSX('Logout', () => <Logout firstName='John' lastName='Doe' onLogout={action('onLogout')}  />);
