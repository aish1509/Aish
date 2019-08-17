import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import RaiseFundsPage from '../RaiseFundsPage';
import SetupRewards from '../SetupRewards';
import ShareVideo from '../ShareVideo';
import ChooseTime from '../ChooseTime';
import ProgressBar from '../ProgressBar';
import {URLS} from '../routes';
import {coverImages} from '../constants';

const useStyles = makeStyles({
	container: {
		width: '90%',
		height: '65%',
		backgroundColor: '#efefef',
		display: 'flex',
		alignItems: 'stretch'
	},
	verticalTextLeft: {
		width: props => props.sliderWidth,
		border: '2px solid #96b079',
		backgroundColor: '#adbf9a',
		height: '100%',
		position: 'relative'
	},
	text: {
		writingMode: 'vertical-lr',
		transform: 'translateX(-50%) translateY(-50%) rotate(180deg)',
		top: '50%',
		left: '50%',
		position: 'absolute',
		fontSize: '13px',
		fontWeight: 'Bold'
	},
	content: {
		height: '100%',
		width: props => `calc(100% - ${props.sliderWidth})`
	},
	displayArea: {
		height: '100%',
		width: props => `calc(100% - ${props.sliderWidth})`,
		float: 'right',
		backgroundImage: props =>
			`url(${coverImages[props.localStorage.getItem('coverImg')]})`,
		backgroundSize: 'cover'
	}
});

const Slider = props => {
	const {path} = props.match;
	console.log(path);
	const [state, setState] = useState({current: 0});
	const classes = useStyles({...props, localStorage});

	useEffect(() => {
		if (path.indexOf(URLS.RAISEFUNDS) !== -1) {
			updateBaseOnUrl(0);
		}
		if (path.indexOf(URLS.SETUPREWARDS) !== -1) {
			updateBaseOnUrl(1);
		}
		if (path.indexOf(URLS.SHAREVIDEO) !== -1) {
			updateBaseOnUrl(2);
		}
		if (path.indexOf(URLS.CHOSETIME) !== -1) {
			updateBaseOnUrl(3);
		}
	}, [path]);
	const updateTab = (event, index) => {
		event.preventDefault();
		setState({current: index});
	};

	const updateBaseOnUrl = index => {
		console.log('in setState');
		setState({current: index});
	};

	const individualContent = value => {
		if (value === 'RAISE FUNDS') {
			return <RaiseFundsPage />;
		}
		if (value === 'SET UP REWARDS') {
			return <SetupRewards />;
		}
		if (value === 'SHARE VIDEO') {
			return <ShareVideo />;
		}
		if (value === 'CHOOSE TIME') {
			return <ChooseTime />;
		}
		return null;
	};
	const displaySlider = (classes, props) => {
		if (props.sliders.length > 0) {
			return props.sliders.map((slide, index) => {
				if (state.current === index) {
					return (
						<div
							key={`slider-${index}`}
							className={classes.content}
						>
							<button
								className={classes.verticalTextLeft}
								onClick={event => updateTab(event, index)}
							>
								<span className={classes.text}>
									{slide.title}
								</span>
							</button>
							<div className={classes.displayArea}>
								{individualContent(slide.title)}
							</div>
						</div>
					);
				}
				return (
					<button
						key={`slider-${index}`}
						className={classes.verticalTextLeft}
						onClick={event => updateTab(event, index)}
					>
						<span className={classes.text}>{slide.title}</span>
					</button>
				);
			});
		}
		return null;
	};

	return (
		<>
			<ProgressBar />
			<div className={classes.container}>
				{displaySlider(classes, props)}
			</div>
		</>
	);
};

Slider.defaultProps = {
	sliders: [
		{
			title: 'RAISE FUNDS',
			image: 'ez-b1-genre-bg-hiphop.jpg',
			style: {
				color: 'blue'
			}
		},
		{
			title: 'SET UP REWARDS',
			image: '',
			style: {
				color: 'blue'
			}
		},
		{
			title: 'SHARE VIDEO',
			image: 'ez-b1-genre-bg-pop.jpg',
			style: {
				color: 'blue'
			}
		},
		{
			title: 'CHOOSE TIME',
			style: {
				color: 'blue'
			}
		}
	],
	sliderWidth: '3%'
};

Slider.propTypes = {
	sliders: PropTypes.array,
	sliderWidth: PropTypes.string
};

export default Slider;
