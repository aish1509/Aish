import {IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import React from 'react';
import {Logout, SettingsIcon} from '@math/common';
import {makeStyles} from '@material-ui/styles';

import './ZoneHeader.scss';

export const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		height: '60px',
		backgroundColor: theme.colors.green[100],
		justifyContent: 'space-between'
	},
	headerText: {
		fontFamily: theme.fonts.openSansBold,
		fontSize: '15px',
		padding: '15px 0 0 15px',
		color: theme.colors.blueGrey[20],
		flex: '20',
		textTransform: 'uppercase'
	},
	leftSquare: {
		display: 'flex',
		backgroundColor: theme.colors.green[40]
	},
	triangleTopleft: {
		borderTop: `60px solid ${theme.colors.green[40]}`,
		borderRight: `60px solid ${theme.colors.green[100]}`
	}
}));
const ZoneHeader = ({
	children,
	onHomeClick,
	firstName,
	lastName,
	onLogout,
	onSettingsClick,
	showSettings
}) => {
	const classes = useStyles();

	const handleOnClick = e => {
		e.preventDefault();
		onHomeClick();
	};

	return (
		<div className={classes.container}>
			<div className={classes.leftSquare}>
				<IconButton onClick={handleOnClick}>
					<HomeIcon style={{color: 'white'}} />
				</IconButton>
				<div className={classes.triangleTopleft} />
			</div>
			<div className={classes.headerText}>{children}</div>
			<Logout
				lastName={lastName}
				firstName={firstName}
				onLogout={onLogout}
			/>
			{showSettings && <SettingsIcon onSettingsClick={onSettingsClick} />}
		</div>
	);
};

ZoneHeader.defaultProps = {
	children: null,
	onLogout: () => {},
	onSettingsClick: () => {},
	showSettings: true
};
ZoneHeader.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	children: PropTypes.node,
	onLogout: PropTypes.func,
	onSettingsClick: PropTypes.func,
	showSettings: PropTypes.bool,
	onHomeClick: PropTypes.func.isRequired
};

export default ZoneHeader;
