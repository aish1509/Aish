import React from 'react';
import {storiesOf} from '@storybook/react';

import LanguageSwitch from '../../LanguageSwitch';
import useSetState from '../../../hooks/useSetState';

import VideoPlayer from '../index';

storiesOf('common/VideoPlayer', module)
	.addParameters({
		info: {
			source: true,
			inline: false,
			header: true,
			propTables: [VideoPlayer]
		}
	})
	.addWithJSX('Demo', () => {
		const VideoPlayerDemo = () => {
			const [{playing}, setState] = useSetState({
				playing: false
			});

			return (
				<VideoPlayer
					pause={playing}
					time={12}
					vol={0.2}
					headerLeft="Sintel"
					headerRight={
						<LanguageSwitch
							leftButtonLabel="Preview"
							rightButtonLabel="Avance"
							onToggle={e => setState({playing: e})}
						/>
					}
				>
					<source
						src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4"
						type="video/mp4"
					/>
					<track
						src="https://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-en.vtt"
						label="English subtitles"
						kind="subtitles"
						srcLang="en"
					/>
					<track
						src="https://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-de.vtt"
						label="English subtitles"
						kind="subtitles"
						srcLang="de"
					/>
					<track
						src="https://iandevlin.github.io/mdn/video-player-with-captions/subtitles/vtt/sintel-es.vtt"
						label="English subtitles"
						kind="subtitles"
						srcLang="es"
					/>
				</VideoPlayer>
			);
		};

		return <VideoPlayerDemo />;
	});
