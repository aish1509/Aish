import React from 'react';
import PropTypes from 'prop-types';
import {URLS} from './routes';
import {MathButton} from '@math/common';

const ButtonNavigation = ({path, history}) => {
	const onClickHandlerGoOn = () => {
		if (history.location.pathname === `${path}${URLS.VIDEO}`) {
			history.push(`${path}${URLS.MUSICGENRE}`);
			return;
		}
		if (history.location.pathname === `${path}${URLS.MUSICGENRE}`) {
			history.push(`${path}${URLS.RAISEFUNDS}`);
			return;
		}
		if (history.location.pathname === `${path}${URLS.RAISEFUNDS}`) {
			history.push(`${path}${URLS.SETUPREWARDS}`);
			return;
		}
		if (history.location.pathname === `${path}${URLS.SETUPREWARDS}`) {
			history.push(`${path}${URLS.SHAREVIDEO}`);
			return;
		}
		if (history.location.pathname === `${path}${URLS.SHAREVIDEO}`) {
			history.push(`${path}${URLS.CHOSETIME}`);
			return;
		}
		if (history.location.pathname === `${path}${URLS.CHOSETIME}`) {
			history.push(`${path}${URLS.RESULT}`);
		}
	};

	const onClickHandlerStart = () => {
		history.push(`${path}${URLS.VIDEO}`);
	};

	const onClickHandlerStartOver = () => {
		history.push(`${path}${URLS.ROOT}`);
	};

	const onClickHandlerExit = () => {
		history.push('/explorezone');
	};

	const styles = {
		float: 'right',
		marginRight: '2%'
	};
	if (history.location.pathname !== `${path}${URLS.ROOT}`) {
		return (
			<>
				{history.location.pathname !== `${path}${URLS.RESULT}` && (
					<MathButton
						data-testid="Button-Go-On"
						buttonStyleModifier={styles}
						onClickHandler={onClickHandlerGoOn}
					>
						{history.location.pathname ===
						`${path}${URLS.CHOSETIME}`
							? 'Run'
							: 'Go On'}
					</MathButton>
				)}
				{history.location.pathname === `${path}${URLS.RESULT}` && (
					<MathButton
						data-testid="Button-Exit"
						buttonStyleModifier={styles}
						onClickHandler={onClickHandlerExit}
					>
						Exit
					</MathButton>
				)}
				<MathButton
					data-testid="Button-StartOver"
					buttonStyleModifier={styles}
					onClickHandler={onClickHandlerStartOver}
					secondary={true}
				>
					Start Over
				</MathButton>
			</>
		);
	}
	return (
		<MathButton
			data-testid="Button-Start"
			buttonStyleModifier={styles}
			onClickHandler={onClickHandlerStart}
		>
			Start
		</MathButton>
	);
};

ButtonNavigation.propTypes = {
	path: PropTypes.string.isRequired,
	history: PropTypes.object.isRequired
};

export default ButtonNavigation;
