import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ProgressBar from '../ProgressBar';
import Calender from './Calender';
import BarGraph from './BarGraph';

const useStyles = makeStyles({
	resultContainer: {
		display: 'flex',
		height: '65%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	progressContainer: {
		display: 'flex',
		height: '20%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		top: '10%',
		position: 'absolute'
	}
});

const ResultsPage = () => {
	const classes = useStyles();
	const [nosOfDays, setNosOfDays] = React.useState(0);
	const [clickedIndex, setClickedIndex] = React.useState(0);
	const timer = React.useCallback(() => setNosOfDays(nosOfDays + 1), [
		nosOfDays
	]);

	const _handleClick = index => {
		setClickedIndex(index + 1);
	};
	React.useEffect(() => {
		let id;
		if (nosOfDays < 30) {
			id = setTimeout(timer, 500);
		}
		return () => clearTimeout(id);
	}, [nosOfDays, timer]);
	return (
		<>
			<ProgressBar nosOfDays={!clickedIndex ? nosOfDays : clickedIndex} />
			<div className={classes.resultContainer}>
				<Calender
					nosOfDays={!clickedIndex ? nosOfDays : clickedIndex}
					handleClick={_handleClick}
				/>
				<BarGraph
					nosOfDays={!clickedIndex ? nosOfDays : clickedIndex}
				/>
			</div>
		</>
	);
};

export default ResultsPage;
