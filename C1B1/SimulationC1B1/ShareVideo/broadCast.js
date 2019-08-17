import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TagContext} from './dropDown';
import {BroadCastTags, smallImages} from '../constants';

const useStyles = makeStyles({
	broadCast: {
		marginLeft: '80px',
		marginTop: '40px',
		marginBottom: '20px',
		width: '80%',
		border: '2px solid black',
		height: '120px',
		backgroundColor: 'white'
	},
	imageRow: {
		display: 'flex',
		marginTop: '3%',
		alignItems: 'center',
		height: '70%'
	},
	boxImage: {
		width: '10%',
		height: '70%'
	}
});

const BroadCast = ({selectionText, ...rest}) => {
	const classes = useStyles(rest);
	const [indexVal] = React.useContext(TagContext);
	const smallImage = localStorage.getItem('smallImg');

	return (
		<div className={classes.broadCast}>
			<div>
				{indexVal === 2 ? BroadCastTags[indexVal] : null}
				&nbsp;
				{selectionText} {''}{' '}
				{indexVal === 1
					? BroadCastTags[indexVal].concat(smallImage.toUpperCase())
					: null}
				{''}
				{indexVal === 3 ? BroadCastTags[indexVal] : null}
				{''}
				{indexVal === 0 ? BroadCastTags[indexVal] : null}
			</div>
			<div className={classes.imageRow}>
				<img
					src={smallImages[localStorage.getItem('smallImg')]}
					alt="side Genre"
					className={classes.boxImage}
				/>
				<span>
					&nbsp;{localStorage.getItem('inputVal')}&nbsp; 4&#58;21
				</span>
			</div>
		</div>
	);
};

export default BroadCast;
