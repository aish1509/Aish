import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {mockScoreDataC1B1} from '../constants';

const useStyles = makeStyles({
	progessContainer: {
		width: '90%',
		height: '12%',
		border: '1px solid #000',
		marginBottom: '5px',
		backgroundColor: '#fafafa'
	},
	progressBar: {
		border: '2px solid #e4e4e4',
		borderRadius: '5px',
		backgroundColor: '#f3f3f3',
		height: '40%',
		width: '95%',
		marginTop: '2%',
		marginLeft: '2%',
		alignItems: 'center',
		position: 'relative'
	},
	progressBarUpdate: props => {
		let value = null;
		if (props.nosOfDays > 0) {
			value =
				(Number(props[props.nosOfDays].replace('$', '')) * 100) /
				Number(props[30].replace('$', ''));
		}
		return {
			backgroundColor: '#eba640',
			height: '100%',
			borderRadius: '5px',
			width: value ? `${value}%` : '0',
			zIndex: '-1'
		};
	},
	progressGoal: {
		width: '2px',
		height: '100%',
		backgroundColor: '#000',
		zIndex: '2',
		position: 'absolute'
	}
});
const ProgressBar = props => {
	const classes = useStyles({...props, ...mockScoreDataC1B1.amountRaised});
	return (
		<div className={classes.progessContainer}>
			<div className={classes.progressBar}>
				<div className={classes.progressBarUpdate}></div>
				{/* <div className={classes.progressGoal}></div> */}
			</div>
		</div>
	);
};

export default ProgressBar;
