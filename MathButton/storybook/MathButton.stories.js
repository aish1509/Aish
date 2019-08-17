import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import MathButton from '../index';

storiesOf('common/MathButton/primary', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [MathButton]
		}
	})
	.addWithJSX('enabled', () => (
		<MathButton onClickHandler={action('onClickHandler')}>TEST</MathButton>
	))
	.addWithJSX('disabled', () => (
		<MathButton disabled onClickHandler={action('onClickHandler')}>
			TEST
		</MathButton>
	));

storiesOf('common/MathButton/secondary', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [MathButton]
		}
	})
	.addWithJSX('enabled', () => (
		<MathButton secondary onClickHandler={action('onClickHandler')}>
			TEST
		</MathButton>
	))
	.addWithJSX('disabled', () => (
		<MathButton
			disabled
			secondary
			onClickHandler={action('onClickHandler')}
		>
			TEST
		</MathButton>
	));
