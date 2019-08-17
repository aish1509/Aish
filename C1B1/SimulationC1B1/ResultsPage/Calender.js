import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
	container: {
		display: 'grid',
		height: '260px',
		width: '300px',
		gridTemplateColumns: 'repeat(6, min-content)',
		gridTemplateRows: 'repeat(6, min-content)'
	},
	calenderResult: {
		gridColumn: ' 1/-1',
		backgroundColor: ' rgb(224, 72, 97)',
		textTransform: ' uppercase',
		fontWeight: ' bold',
		fontSize: ' 24px',
		color: ' white',
		justifySelf: ' stretch'
	},
	cell: {
		height: '40px',
		width: '40px',
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer'
	},
	cellPast: {
		height: '40px',
		width: '40px',
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#b2aba9',
		cursor: 'pointer'
	},
	cellActive: {
		height: '40px',
		width: '40px',
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffbd33',
		cursor: 'pointer'
	}
});

function RenderDivs({nosOfCells = 30, current, classes, handleClick}) {
	return Array(nosOfCells)
		.fill(null)
		.map((_, index) => {
			return (
				<ColoredDiv
					index={index}
					key={index}
					current={current}
					classes={classes}
					handleClick={handleClick}
				/>
			);
		});
}

const ColoredDiv = ({index, current, classes, handleClick}) => {
	if (index + 1 < current) {
		return (
			<div
				className={classes.cellPast}
				key={index}
				onClick={() => handleClick(index)}
			>
				{index + 1}
			</div>
		);
	}
	if (index + 1 === current) {
		return (
			<div
				className={classes.cellActive}
				key={index}
				onClick={() => handleClick(index)}
			>
				{index + 1}
			</div>
		);
	}
	return (
		<div
			className={classes.cell}
			key={index}
			onClick={() => handleClick(index)}
		>
			{index + 1}
		</div>
	);
};

const Calender = props => {
	const classes = useStyles(props);
	const {nosOfDays, handleClick} = props;
	return (
		<div className={classes.container}>
			<div className={classes.calenderResult}>Calender</div>
			<RenderDivs
				current={nosOfDays}
				classes={classes}
				handleClick={handleClick}
			/>
		</div>
	);
};

export default Calender;
