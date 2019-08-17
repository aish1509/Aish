import React from 'react';
import PropTypes from 'prop-types';
import './Logout.scss';

import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
	container: {
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'flex-end',
		flexDirection: 'column',
		fontFamily: [
			'OpenSans-Regular',
			'Roboto',
			'Helvetica',
			'Arial',
			'sans-serif'
		],
		fontSize: '14px',
		color: theme.colors.blueGrey[20],
		marginRight: '10px'
	},
	welcome: {
		fontFamily: [
			'OpenSans-Regular',
			'Roboto',
			'Helvetica',
			'Arial',
			'sans-serif'
		],
		fontSize: '10px',
		color: theme.colors.blueGrey[100]
	},
	logout: {
		fontFamily: [
			'OpenSans-Regular',
			'Roboto',
			'Helvetica',
			'Arial',
			'sans-serif'
		],
		fontSize: '12px',
		color: theme.colors.blueGrey[20],
		border: 'none',
		textDecorationLine: 'underline',
		background: 'none',
		padding: '0'
	}
}));

const Logout = ({firstName, onLogout}) => {
	const classes = useStyles();

	const handleClick = e => {
		e.preventDefault();
		onLogout();
	};

	return (
		<div className={classes.container}>
			Welcome, {firstName}!
			<button
				className={classes.logout}
				type="button"
				onClick={handleClick}
			>
				Logout
			</button>
		</div>
	);
};

Logout.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	onLogout: PropTypes.func.isRequired
};

export default Logout;
