import React, {useState} from 'react';
import ReactHowler from 'react-howler';
import Timer from './timer';
import Selection from './selection';
import {
	coverImages,
	BASE_PATH,
	ChooseTimeAudio,
	ChooseDayAudio
} from '../constants';

const ChoseTime = () => {
	const [isPlaying, setIsPlaying] = useState(true);
	const handleEnd = () => {
		setIsPlaying(false);
	};
	return (
		<div
			style={{
				display: 'flex',
				height: '100%',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				backgroundImage: `url(${
					coverImages[localStorage.getItem('coverImg')]
				})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
		>
			{isPlaying && (
				<ReactHowler
					onEnd={handleEnd}
					playing={isPlaying}
					src={`${BASE_PATH}${ChooseTimeAudio}`}
				/>
			)}
			<h3>CHOOSE TIME AND DAY</h3>
			<Timer />
			<Selection />
		</div>
	);
};

export default ChoseTime;
