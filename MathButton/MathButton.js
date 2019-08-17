import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
	button: props => {
		const commonStyle = {
			borderRadius: '74px',
			width: '150px',
			height: '30px',
			fontFamily: theme.fonts.montserratBold,
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '12px',
			cursor: props.disabled ? 'default' : 'pointer',
			letterSpacing: '0.015em',
			textTransform: 'capitalize'
		};

		const primaryStyle = {
			color: theme.colors.white,
			backgroundColor: props.disabled
				? theme.colors.blueGrey[60]
				: theme.colors.blue.dark,
			border: `none`,
			'&:hover': {
				backgroundColor: props.disabled
					? theme.colors.blueGrey[60]
					: theme.colors.blue.darkest
			}
		};

		const secondaryStyle = {
			color: props.disabled
				? theme.colors.blueGrey[60]
				: theme.colors.blue.dark,
			backgroundColor: theme.colors.white,
			border: `1.5px solid ${
				props.disabled
					? theme.colors.blueGrey[60]
					: theme.colors.blue.dark
			}`,
			'&:hover': {
				backgroundColor: props.disabled ? theme.colors.white : '#B3CFE2'
			}
		};

		return {
			...commonStyle,
			...(props.secondary ? secondaryStyle : primaryStyle),
			...props.buttonStyleModifier
		};
	}
}));

const MathButton = ({
	children,
	onClickHandler,
	disabled,
	buttonStyleModifier,
	secondary
}) => {
	const classes = useStyles({buttonStyleModifier, disabled, secondary});

	const handleButtonClick = e => {
		e.preventDefault();
		onClickHandler();
	};

	return (
		<button
			className={classes.button}
			disabled={disabled}
			onClick={handleButtonClick}
		>
			{children}
		</button>
	);
};

MathButton.defaultProps = {
	buttonStyleModifier: {},
	children: 'Go On',
	disabled: false,
	secondary: false
};

MathButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClickHandler: PropTypes.func.isRequired,
	buttonStyleModifier: PropTypes.object,
	disabled: PropTypes.bool,
	secondary: PropTypes.bool
};

export default MathButton;
