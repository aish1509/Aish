import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {act} from 'react-dom/test-utils';
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import VideoPlayer from '../index';

jest.mock(
	'popper.js',
	() =>
		class Popper {
			static placements = [
				'auto',
				'auto-end',
				'auto-start',
				'bottom',
				'bottom-end',
				'bottom-start',
				'left',
				'left-end',
				'left-start',
				'right',
				'right-end',
				'right-start',
				'top',
				'top-end',
				'top-start'
			];

			constructor() {
				return {
					destroy: () => {},
					scheduleUpdate: () => {}
				};
			}
		}
);

describe('<VideoPlayer />', () => {
	let wrapper = null;
	let playStub = null;
	let pauseStub = null;

	afterEach(cleanup);

	beforeEach(() => {
		playStub = jest
			.spyOn(window.HTMLMediaElement.prototype, 'play')
			.mockImplementation(() => {});
		pauseStub = jest
			.spyOn(window.HTMLMediaElement.prototype, 'pause')
			.mockImplementation(() => {});
		wrapper = mount(
			<VideoPlayer>
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
			</VideoPlayer>
		);
	});

	it('should render correctly', () => {
		wrapper = shallow(<VideoPlayer />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('Slider thumb icon value === 0 render correctly', () => {
		expect(wrapper.find('Video').exists()).toBe(true);
		act(() => {
			expect(wrapper.find('Video').prop('onPlay')());
			expect(wrapper.find('Video').prop('onPause')());
			expect(wrapper.find('Video').prop('onSeeked')());
			expect(wrapper.find('Video').prop('onCanPlay')());
			expect(wrapper.find('Video').prop('onSeeking')());
			expect(wrapper.find('Video').prop('onEnded')());

			const mockedDurationEvent = {target: {duration: 1}};
			const mockedCurrentTimeEvent = {target: {currentTime: 1}};

			expect(
				wrapper.find('Video').prop('handleMetaData')(
					mockedDurationEvent
				)
			);
			expect(
				wrapper.find('Video').prop('handleTimeUpdate')(
					mockedCurrentTimeEvent
				)
			);
			var event = new CustomEvent('cat', {
				detail: {
					faking: true
				}
			});
			expect(wrapper.find('Video').prop('handleContextMenu')(event));
		});

		wrapper.unmount();
	});

	it('PlaySwitch fires corretly', () => {
		expect(wrapper.find('PlaySwitch').exists()).toBe(true);
		act(() => {
			expect(wrapper.find('PlaySwitch').prop('onIconButtonClick')());
		});
		wrapper.unmount();
	});

	it('pause render correctly', async () => {
		const {getByLabelText} = render(
			<VideoPlayer play>
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
			</VideoPlayer>
		);

		const selectNode = await waitForElement(() =>
			getByLabelText('Play/Pause')
		);
		fireEvent.click(selectNode);
		expect(getByLabelText('Pause')).toBeDefined();
		expect(pauseStub).toHaveBeenCalled();
		pauseStub.mockRestore();
	});

	it('play render correctly', async () => {
		const {getByLabelText} = render(
			<VideoPlayer pause>
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
			</VideoPlayer>
		);
		const selectNode = await waitForElement(() =>
			getByLabelText('Play/Pause')
		);
		fireEvent.click(selectNode);
		expect(getByLabelText('Play')).toBeDefined();
		expect(playStub).toHaveBeenCalled();
		playStub.mockRestore();
	});

	it('VolumeController fires correctly', () => {
		expect(wrapper.find('VolumeController').exists()).toBe(true);
		act(() => {
			expect(wrapper.find('VolumeController').prop('onSlide')(100));
		});
		wrapper.unmount();
	});

	it('ClickAwayListener fires correctly', () => {
		expect(wrapper.find('ClickAwayListener').exists()).toBe(true);
		act(() => {
			expect(wrapper.find('ClickAwayListener').prop('onClickAway')());
		});
	});

	it('handleCaptions fires correctly', () => {
		const {getByLabelText} = render(<VideoPlayer />);

		act(() => {
			const selectNode = getByLabelText('Open Captions');
			expect(getByLabelText('CaptionOn')).not.toBeNull();
			expect(selectNode).not.toBeNull();
			selectNode.click(selectNode, {target: {value: 'matched'}});
			expect(getByLabelText('CaptionOn')).not.toBeNull();
		});
	});

	it('handleCaptionToggle fires correctly', async () => {
		const {getByLabelText, getAllByLabelText, getByTestId} = render(
			<VideoPlayer play>
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
			</VideoPlayer>
		);

		Object.defineProperty(window.HTMLMediaElement.prototype, 'textTracks', {
			writable: true,
			value: [
				{
					label: 'English subtitles',
					language: 'eng',
					mode: 'disabled'
				},
				{
					label: 'Spanish subtitles',
					language: 'es',
					mode: 'disabled'
				}
			]
		});

		const selectCaptionNode = getByLabelText('Open Captions');
		expect(selectCaptionNode).not.toBeNull();

		act(() => {
			selectCaptionNode.click(selectCaptionNode, {
				target: {value: 'matched'}
			});
		});

		const selectNode = getByTestId('HandleCaptionToggle');
		expect(selectNode).not.toBeNull();

		act(() => {
			selectNode.click(selectNode);
		});

		const selectCaptionsNode = await waitForElement(() =>
			getAllByLabelText('HandleCaptionList')
		);
		expect(selectCaptionsNode).not.toBeNull();

		act(() => {
			selectCaptionsNode.forEach(el => {
				el.click(selectCaptionsNode, {
					target: {value: 'es'}
				});
			});
		});
		expect(getByLabelText('Caption Off')).toHaveTextContent('off');
	});

	it('No caption renders correctly', () => {
		const {getByLabelText, getByTestId} = render(
			<VideoPlayer play>
				<source
					src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4"
					type="video/mp4"
				/>
			</VideoPlayer>
		);

		Object.defineProperty(window.HTMLMediaElement.prototype, 'textTracks', {
			writable: true,
			value: []
		});

		const selectCaptionNode = getByLabelText('Open Captions');
		expect(selectCaptionNode).not.toBeNull();

		act(() => {
			selectCaptionNode.click(selectCaptionNode, {
				target: {value: 'matched'}
			});
		});

		const selectNode = getByTestId('HandleCaptionToggle');
		expect(selectNode).not.toBeNull();

		act(() => {
			selectNode.click(selectNode);
		});
		expect(getByLabelText('Caption Off')).toHaveTextContent('no caption');
	});

	it('SeekController fires correctly', () => {
		expect(wrapper.find('SeekController').exists()).toBe(true);
		act(() => {
			expect(wrapper.find('SeekController').prop('onSlide')(10));
		});
		wrapper.unmount();
	});

	it('FullScreenIconButton fires correctly', () => {
		expect(wrapper.find('FullScreenIconButton').exists()).toBe(true);
		wrapper.unmount();
	});

	it('Element renders correctly', () => {
		expect(wrapper.find('#VidContainer').length).toBe(1);
		wrapper.unmount();
	});

	it('FullScreenIconButton fires correctly 2', () => {
		expect(wrapper.find('FullScreenIconButton').exists()).toBe(true);

		act(() => {
			Object.defineProperty(
				window.HTMLMediaElement.prototype,
				'webkitRequestFullscreen',
				{
					writable: true,
					value: jest.fn().mockResolvedValue()
				}
			);
			expect(
				wrapper.find('FullScreenIconButton').prop('onIconButtonClick')()
			);
		});
		wrapper.unmount();
	});

	it('FullScreenIconButton err handle correctly', () => {
		expect(wrapper.find('FullScreenIconButton').exists()).toBe(true);

		act(() => {
			Object.defineProperty(
				window.HTMLMediaElement.prototype,
				'webkitRequestFullscreen',
				{
					writable: true,
					value: jest.fn().mockRejectedValue()
				}
			);
			expect(
				wrapper.find('FullScreenIconButton').prop('onIconButtonClick')()
			);
		});
		wrapper.unmount();
	});

	it('controls={true} render correctly', async () => {
		const {getByTestId, debug} = render(
			<VideoPlayer controls={false}>
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
			</VideoPlayer>
		);
		const selectNode = await waitForElement(() =>
			getByTestId('Controller')
		);
	});
});
