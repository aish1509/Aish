import React, {useEffect, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	ClickAwayListener,
	Fade,
	Grid,
	Paper,
	Popper,
	Typography
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import {
	CaptionButton,
	FullScreenIconButton,
	SeekController,
	PlaySwitch,
	useSetState,
	VolumeController,
	Languages
} from '@math/common';

import formatTime from './utils/formatTime';
import Video from './Video';

const styles = theme => {
	return {
		root: {
			height: '90%',
			width: '80%',
			margin: 'auto'
		},
		headerRight: {
			paddingBottom: theme.spacing(2)
		},
		headerLeft: {
			paddingTop: theme.spacing(1)
		},
		videoBg: {
			backgroundColor: 'rgba(0,0,0,.9)',
			color: theme.palette.common.white
		},
		iconButton: {
			color: theme.palette.common.white
		},
		videoTitle: {
			margin: '25px 0'
		},
		whiteFont: {
			color: theme.palette.common.white
		},
		greyFont: {
			color: '#ccc'
		}
	};
};

function VideoPlayer({
	classes,
	children,
	containerStyle,
	controls,
	ended,
	handleVideoEnded,
	headerLeft,
	headerRight,
	time,
	pause,
	play,
	poster,
	vol
}) {
	const initialSettings = {
		currentTime: time || '',
		playing: play,
		volume: vol,
		isEnded: ended,
		duration: 0,
		seeking: false,
		seeked: false,
		canPlay: false,
		isCaptionToggleOn: false,
		anchorEl: null,
		caption: Languages.English
	};
	const [
		{
			currentTime,
			playing,
			volume,
			isEnded,
			duration,
			isCaptionToggleOn,
			anchorEl,
			caption
		},
		setState
	] = useSetState(initialSettings);
	let video = useRef(null);
	useEffect(() => {
		pause && video.current.pause();
		play && video.current.play();
		video.current.currentTime = time;
	}, [pause, play, time]);

	const onPlay = () => setState({playing: true});
	const onPause = () => setState({playing: false});
	const onEnded = () => {
		handleVideoEnded();
		setState({isEnded: true});
	};

	const handleOnContextMenu = event => event.preventDefault();

	const onSeeking = event => {
		setState({seeking: true, seeked: false});
	};

	const onSeeked = event => {
		setState({seeking: false, seeked: true});
	};

	const onCanPlay = event => {
		setState({canPlay: true});
	};

	const handleMetaData = event => {
		setState({duration: event.target.duration});
	};

	const handleTimeUpdate = event => {
		const currentTime = event.target.currentTime;
		setState({currentTime: currentTime});
	};

	const handlePlaySwitch = useCallback(() => {
		playing ? video.current.pause() : video.current.play();
	}, [playing]);

	const handleVolumeChange = useCallback(val => {
		video.current.volume = val / 100;
	}, []);

	const handleFullScreen = useCallback(() => {
		const videoEl = video.current;
		var requestFullScreen =
			videoEl.requestFullscreen ||
			videoEl.msRequestFullscreen ||
			videoEl.mozRequestFullScreen ||
			videoEl.webkitRequestFullscreen;
		(async () => {
			await requestFullScreen.call(videoEl);
		})().catch(() => {});
	}, [video]);

	const handleSeekChange = useCallback(
		val => {
			video.current.currentTime = (val / 100) * duration;
		},
		[duration]
	);

	const handleCaptionsChange = useCallback(
		event => {
			setState({anchorEl: event.currentTarget, isCaptionToggleOn: true});
		},
		[setState]
	);

	const handleCaptionList = el => {
		[...video.current.textTracks].forEach(track => {
			if (track.language === el.currentTarget.value) {
				setState({caption: el.currentTarget.value});
				track.mode = 'showing';
			} else {
				track.mode = 'hidden';
			}
		});
	};

	const handleCaptionToggle = () => {
		setState({caption: 'off'});
		[...video.current.textTracks].forEach(track => {
			track.mode = 'hidden';
		});
	};

	const handleClickAway = () => {
		setState({isCaptionToggleOn: false});
	};

	const renderButtons = () => {
		return [...video.current.textTracks].map(track => (
			<Button
				key={track.language}
				value={track.language}
				aria-label="HandleCaptionList"
				color={caption === track.language ? 'secondary' : 'default'}
				onClick={handleCaptionList}
			>
				{track.language}
			</Button>
		));
	};

	const id = isCaptionToggleOn ? 'simple-popper' : null;
	const controllerStyle = controls ? {} : {display: 'none'};

	return (
		<div id="VidContainer" className={classes.root}>
			<Grid container item xs={12}>
				<Grid item xs={8}>
					<Typography
						variant="h5"
						className={classes.headerLeft}
						color="textPrimary"
					>
						{headerLeft}
					</Typography>
				</Grid>
				<Grid item xs={4} className={classes.headerRight}>
					{headerRight}
				</Grid>
			</Grid>
			<Grid container justify="center" alignItems="center" spacing={0}>
				<Grid container item spacing={0}>
					<Grid container spacing={0} onClick={handlePlaySwitch}>
						<Video
							video={video}
							handleContextMenu={handleOnContextMenu}
							handleTimeUpdate={handleTimeUpdate}
							handleMetaData={handleMetaData}
							onCanPlay={onCanPlay}
							onSeeked={onSeeked}
							onPlay={onPlay}
							onPause={onPause}
							onEnded={onEnded}
							onSeeking={onSeeking}
							poster={poster}
						>
							{children}
						</Video>
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={12}
					spacing={0}
					className={classes.videoBg}
					style={controllerStyle}
					data-testid="Controller"
				>
					<Grid
						container
						item
						xs={1}
						justify="center"
						alignItems="center"
					>
						<PlaySwitch
							playing={playing}
							onIconButtonClick={handlePlaySwitch}
						/>
					</Grid>

					<Grid
						container
						item
						alignItems="center"
						direction="row"
						justify="flex-start"
						xs={8}
					>
						<VolumeController
							volume={volume}
							onSlide={handleVolumeChange}
						/>
						<Grid
							item
							xs={2}
							alignContent="flex-end"
							justify="flex-end"
							container
						>
							<Typography
								variant="overline"
								className={classes.whiteFont}
								style={{
									paddingRight: '30px',
									textAlign: 'right',
									float: 'right'
								}}
							>
								{formatTime(currentTime)}
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<SeekController
								disabled={!isEnded}
								sliderValue={currentTime / duration}
								onSlide={handleSeekChange}
							/>
						</Grid>
						<Grid item xs={2}>
							<Typography
								align="center"
								className={classes.greyFont}
								variant="overline"
								style={{paddingLeft: '30px', color: '#ccc'}}
							>
								{formatTime(duration)}
							</Typography>
						</Grid>
					</Grid>

					<Grid
						container
						item
						alignItems="flex-end"
						justify="flex-end"
						direction="row"
						xs={3}
					>
						<ClickAwayListener onClickAway={handleClickAway}>
							<CaptionButton
								caption={caption}
								handleCaptions={handleCaptionsChange}
								isCaptionToggleOn={isCaptionToggleOn}
							/>
						</ClickAwayListener>

						<Popper
							transition
							open={isCaptionToggleOn}
							anchorEl={anchorEl}
							id={id}
							data-testid="Captions Selection"
							placement="top"
						>
							{({TransitionProps}) => (
								<Fade {...TransitionProps} timeout={350}>
									<Paper
										style={{
											marginBottom: '10px',
											display: 'flex',
											flexDirection: 'column'
										}}
									>
										<Button
											data-testid="HandleCaptionToggle"
											aria-label="Caption Off"
											onClick={handleCaptionToggle}
										>
											{video.current.textTracks.length > 0
												? 'off'
												: 'no caption'}
										</Button>
										{renderButtons()}
									</Paper>
								</Fade>
							)}
						</Popper>
						<FullScreenIconButton
							onIconButtonClick={handleFullScreen}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(VideoPlayer);

VideoPlayer.defaultProps = {
	children: React.node,
	containerStyle: {},
	controls: true,
	ended: false,
	handleVideoEnded: () => {},
	headerLeft: React.node,
	headerRight: React.node,
	time: 0,
	pause: false,
	play: false,
	poster: '',
	vol: 0.5
};

VideoPlayer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	containerStyle: PropTypes.object,
	controls: PropTypes.bool,
	ended: PropTypes.bool,
	headerLeft: PropTypes.node,
	headerRight: PropTypes.node,
	handleVideoEnded: PropTypes.func,
	time: PropTypes.number,
	pause: PropTypes.bool,
	play: PropTypes.bool,
	poster: PropTypes.string,
	vol: PropTypes.number
};
