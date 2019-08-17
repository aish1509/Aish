import React from 'react';
import PropTypes from 'prop-types';
import {ContentContainer} from '@math/m180';
import {VideoPlayer, Languages, Path} from '@math/common';
import {titles} from '../../../VideoTitles';

const IntroVideoView = ({data}) => {
	const anchor_media_PATH = `${Path.Media}video/en_US/anchor/`;
	const block_number = `${data.blockIndex + 1}`;

	return (
		<ContentContainer>
			<VideoPlayer
				data-testid="VideoPlayer"
				ended
				vol={0.25}
				headerLeft={titles.C1B1}
				poster={`${anchor_media_PATH}M180_anchor_block_${block_number}_mVideos.png`}
			>
				<source
					src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4"
					type="video/mp4"
				/>
				<track
					src="https://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-en.vtt"
					label="English subtitle"
					kind="subtitles"
					srcLang={Languages.English}
					default
				/>
			</VideoPlayer>
		</ContentContainer>
	);
};
IntroVideoView.propTypes = {
	data: PropTypes.object.isRequired
};

export default IntroVideoView;
