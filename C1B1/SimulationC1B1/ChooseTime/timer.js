import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
	upArrow: {
		height: '0px',
		width: '0px',
		borderLeft: '25px solid transparent',
		borderRight: '25px solid transparent',
		borderBottom: '25px solid black',
		marginLeft: '70px',
		marginBottom: '30px',
		cursor: 'pointer'
	},
	downArrow: {
		height: '0px',
		width: '0px',
		borderLeft: '25px solid transparent',
		borderRight: '25px solid transparent',
		borderTop: '25px solid black',
		marginLeft: '70px',
		marginTop: '30px',
		cursor: 'pointer'
	},
	container: {
		display: 'flex',
		alignItems: 'center'
	},
	card1: {
		height: '140px',
		width: '94px',
		backgroundColor: 'black',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '70px',
		color: 'white',
		fontWeight: '400',
		marginLeft: '10px'
	}
});

const Timer = props => {
	const classes = useStyles({...props});
	const [counterSecond, setCounterSecond] = React.useState(8);
	const [counterFirst, setCounterFirst] = React.useState(0);
	const [time, setTime] = React.useState('AM');
	const handleTimerIncrement = () => {
		setCounterSecond(counterSecond + 1);
	};
	const handleTimerDecrement = () => {
		setCounterSecond(counterSecond - 1);
	};

	React.useLayoutEffect(() => {
		if (counterSecond === 10) {
			setCounterSecond(0);
			setCounterFirst(1);
		}
		if (counterFirst === 1 && counterSecond === 3) {
			setCounterSecond(1);
			setCounterFirst(0);
		}
		if (counterSecond === 0 && counterFirst === 0) {
			setCounterSecond(2);
			setCounterFirst(1);
		}
		if (counterSecond === 0 && counterFirst === 1) {
			setCounterSecond(0);
			setCounterFirst(1);
		}
		if (counterSecond < 0 && counterFirst === 1) {
			setCounterSecond(9);
			setCounterFirst(0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counterSecond]);

	React.useLayoutEffect(() => {
		if (time === 'AM') {
			if (counterFirst === 1 && counterSecond === 2) {
				setTime('PM');
			}
		}
		if (time === 'PM') {
			if (counterFirst === 1 && counterSecond === 2) {
				setTime('AM');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counterSecond, counterFirst]);

	return (
		<div>
			<div className={classes.upArrow} onClick={handleTimerIncrement} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<div className={classes.card1}>{counterFirst}</div>
				<div className={classes.card1}>{counterSecond}</div>
				<div
					className={classes.card1}
					style={{
						color: 'black',
						backgroundColor: 'white',
						fontWeight: '600'
					}}
				>
					&#58;
				</div>
				<div
					className={classes.card1}
					style={{
						color: 'black',
						backgroundColor: 'white',
						fontWeight: '600',
						justifyContent: 'flex-start',
						width: '20%',
						margin: '0'
					}}
				>
					0
				</div>
				<div
					className={classes.card1}
					style={{
						color: 'black',
						backgroundColor: 'white',
						fontWeight: '600',
						justifyContent: 'flex-start',
						width: '20%',
						margin: '0'
					}}
				>
					0
				</div>
				<div
					className={classes.card1}
					style={{
						fontSize: '40px',
						color: 'black',
						backgroundColor: 'white',
						marginRight: '4px'
					}}
				>
					{time}
				</div>
			</div>
			<div className={classes.downArrow} onClick={handleTimerDecrement} />
		</div>
	);
};

export default Timer;
