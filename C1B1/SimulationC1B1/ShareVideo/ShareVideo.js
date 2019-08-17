import React, {useState} from 'react';
import ReactHowler from 'react-howler';
import DropDown from './dropDown';
import {dropDownContent} from '../constants';
import {BASE_PATH, FollowerImage, ShareVideoAudio} from '../constants';

const ShareVideo = () => {
	const [isPlaying, setIsPlaying] = useState(true);
	const handleEnd = () => {
		setIsPlaying(false);
	};
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				fontWeight: 'bold',
				justifyContent: 'center'
			}}
		>
			{isPlaying && (
				<ReactHowler
					onEnd={handleEnd}
					playing={isPlaying}
					src={`${BASE_PATH}${ShareVideoAudio}`}
				/>
			)}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '70%'
				}}
			>
				<strong style={{textTransform: 'uppercase'}}>
					Followers - 499
				</strong>
				<strong style={{textTransform: 'uppercase'}}>
					Their Followers - 6,806
				</strong>
			</div>
			<img
				src={`${BASE_PATH}${FollowerImage}`}
				alt="placeholder"
				style={{
					marginLeft: '80px'
				}}
			/>
			<DropDown data={dropDownContent} />
		</div>
	);
};

export default ShareVideo;
