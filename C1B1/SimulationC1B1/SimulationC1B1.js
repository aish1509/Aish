import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import SimulationC1B1Routes from './SimulationC1B1Routes';
import ButtonNavigation from './ButtonNavigation';
import EZC1B1Image from './images/EZB1Header.png';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		width: '100vw',
		flexDirection: 'column',
		backgroundColor: '#f2f2f2'
	},
	navigationIcons: {
		position: 'fixed',
		bottom: '1%',
		right: '16.5%',
		width: '80%'
	},
	c1b1image: {
		top: '0',
		width: '100%',
		position: 'absolute',
		backgroundImage: `url(${EZC1B1Image})`,
		backgroundSize: 'cover',
		height: '10%'
	}
});

const SimulationC1B1 = React.memo(({path, history}) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.c1b1image} />
			<SimulationC1B1Routes path={path} history={history} />
			<div className={classes.navigationIcons}>
				<ButtonNavigation path={path} history={history} />
			</div>
		</div>
	);
});

SimulationC1B1.propTypes = {
	path: PropTypes.string.isRequired,
	history: PropTypes.object.isRequired
};

export default SimulationC1B1;
