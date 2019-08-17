import React, {useState} from 'react';
import ReactHowler from 'react-howler';
import {makeStyles} from '@material-ui/styles';
import {fundRaiser, fundSite, BASE_PATH, RaiseFundsAudio} from '../constants';

const useStyles = makeStyles({
	fundContent: {
		padding: '2% 5%'
	},
	fund: {
		marginBottom: '5%'
	},
	fundTitle: {
		fontWeight: 'bold',
		marginBottom: '5%',
		fontSize: '18px'
	},
	fundImage: {
		border: '2px solid #fff'
	},
	fundItems: {
		width: '20%',
		height: '90%',
		float: 'left'
	},
	fundExplain: {
		width: '70%',
		height: '90%',
		float: 'left'
	}
});

const RaiseFundsPage = props => {
	const classes = useStyles();
	const [state, setState] = useState({cover: null});
	const [isPlaying, setIsPlaying] = useState(true);

	const site = (index, event) => {
		event.preventDefault();
		const imageView = fundSite[index];
		setState({cover: imageView});
	};

	const handleEnd = () => {
		setIsPlaying(false);
	};

	return (
		<div className={classes.fundContent}>
			{isPlaying && (
				<ReactHowler
					onEnd={handleEnd}
					playing={isPlaying}
					src={`${BASE_PATH}${RaiseFundsAudio}`}
				/>
			)}
			<div className={classes.fundTitle}>RAISE FUNDS</div>
			<div className={classes.fundItems}>
				{fundRaiser.map((fund, index) => (
					<div key={`fund-${index}`} className={classes.fund}>
						<img
							className={classes.fundImage}
							src={fund}
							alt="Fund Sites"
							onClick={event => site(index, event)}
						/>
					</div>
				))}
			</div>
			<div className={classes.fundExplain}>
				{state.cover && (
					<img src={state.cover} alt="Fund Explanation" />
				)}
			</div>
		</div>
	);
};

export default RaiseFundsPage;
