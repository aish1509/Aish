import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import ReactHowler from 'react-howler';
import {
	rewardsImgCollection,
	rewardsImgModelCollection,
	BASE_PATH,
	SetupRewardsAudio
} from '../constants';

const useGridDiv = makeStyles({
	styledGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(5,1fr)',
		gridTemplateRows: '200px',
		gridGap: '10px',
		width: '100%',
		height: '100%',
		placeItems: 'center center'
	}
});

const customBackgroundStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%'
	}
});

const useStyledCard = makeStyles({
	card: {
		transition: 'transform 0.2s',
		backgroundImage: props => `url(${props.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		height: '50%',
		width: '100%',
		marginTop: '30%',
		position: 'relative'
	},
	tooltipText: {
		display: props =>
			props.index === props.selectedIndex ? 'unset' : 'none',
		width: '200%',
		height: '60%',
		top: '-150px',
		left: '-80px',
		/* Position the tooltip */
		position: 'absolute',
		backgroundSize: 'cover',
		zIndex: '3'
	}
});

const StyledCardRewards = ({url, hover, hoverEnd, index, selectedIndex}) => {
	const classes = useStyledCard({url, index, selectedIndex});
	return (
		<div
			url={url}
			className={classes.card}
			onMouseEnter={hover}
			onMouseLeave={hoverEnd}
		>
			<img
				className={classes.tooltipText}
				src={rewardsImgModelCollection[index]}
				alt="fetch"
			/>
		</div>
	);
};

const useStyledDivRewards = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
		marginLeft: '40%',
		alignItems: 'flex-start',
		position: 'relative',
		'&:hover': {
			transform: 'scale(1.2)',
			cursor: 'pointer'
		}
	}
});

export default function SetupRewards() {
	const [state, setState] = useState({
		name0: '',
		name2: '',
		name3: '',
		name4: '',
		name5: ''
	});
	const [isPlaying, setIsPlaying] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState();
	const classes = customBackgroundStyles();
	const rewardStyles = useStyledDivRewards();
	const gridStyles = useGridDiv();
	const handleChange = e => {
		const {value, name} = e.target;
		setState({[name]: value});
	};

	const handleEnd = () => {
		setIsPlaying(false);
	};
	const handleHover = index => {
		setSelectedIndex(index);
	};

	const hoverEnd = () => {
		setSelectedIndex(undefined);
	};

	return (
		<div className={classes.container}>
			{isPlaying && (
				<ReactHowler
					onEnd={handleEnd}
					playing={isPlaying}
					src={`${BASE_PATH}${SetupRewardsAudio}`}
				/>
			)}
			<h2>Setup Rewards</h2>
			<div className={gridStyles.styledGrid}>
				{Array(5)
					.fill(null)
					.map((_, index) => (
						<div className={rewardStyles.container} key={index}>
							<StyledCardRewards
								url={rewardsImgCollection[index]}
								selectedIndex={selectedIndex}
								index={index}
								hover={() => handleHover(index)}
								hoverEnd={hoverEnd}
							/>
							<label
								style={{
									marginTop: '2.5%',
									textTransform: 'uppercase',
									fontWeight: 'bold'
								}}
							>
								Donation
								<input
									type="text"
									name={'name' + index}
									// value={state[`name` + index]}
									autoComplete="off"
									onChange={handleChange}
									style={{
										marginLeft: '5px',
										width: '40px',
										border: '2px solid grey',
										color: '#1030e6',
										fontWeight: 'bold',
										fontSize: '12pt',
										outline: 'none'
									}}
								/>
							</label>
						</div>
					))}
			</div>
		</div>
	);
}
