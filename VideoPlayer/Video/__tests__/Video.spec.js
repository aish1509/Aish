import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Video from '../index';

describe('<Video />', () => {
	let wrapper = null;
	let handleTimeUpdateMock = null;
	let handleMetaDataMock = null;
	let onCanPlayMock = null;
	let onSeekedMock = null;
	let onPlayMock = null;
	let onPauseMock = null;
	let onEndedMock = null;
	let onSeekingMock = null;
	let video = null;

	beforeEach(() => {
		handleTimeUpdateMock = jest.fn();
		handleMetaDataMock = jest.fn();
		onCanPlayMock = jest.fn();
		onSeekedMock = jest.fn();
		onSeekingMock = jest.fn();
		onPlayMock = jest.fn();
		onPauseMock = jest.fn();
		handleTimeUpdateMock = jest.fn();
		handleTimeUpdateMock = jest.fn();
		video = React.createRef();

		wrapper = shallow(
			<Video
				video={video}
				handleTimeUpdate={handleTimeUpdateMock}
				handleMetaData={handleMetaDataMock}
				onCanPlay={onCanPlayMock}
				onSeeked={onSeekedMock}
				onPlay={onPlayMock}
				onPause={onPauseMock}
				onEnded={onEndedMock}
				onSeeking={onSeekingMock}
			/>
		);
	});

	it('should render correctly', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('video callbacks fires corretly', () => {
		const videoRef = React.createRef();
		wrapper = mount(
			<Video
				video={videoRef}
				handleTimeUpdate={handleTimeUpdateMock}
				handleMetaData={handleMetaDataMock}
				onCanPlay={onCanPlayMock}
				onSeeked={onSeekedMock}
				onPlay={onPlayMock}
				onPause={onPauseMock}
				onEnded={onEndedMock}
				onSeeking={onSeekingMock}
			/>
		);

		const VideoComp = wrapper.find('video');
		expect(VideoComp.length).toBe(1);

		const result = Video.defaultProps.onEnded();
		expect(result).toBe(null);

		const result2 = Video.defaultProps.handleContextMenu();
		expect(result2).toBe(null);

		VideoComp.getElement().ref.current.dispatchEvent(new Event('play'));
		expect(onPlayMock).toHaveBeenCalled();
		expect(onPlayMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(new Event('pause'));
		expect(onPauseMock).toHaveBeenCalled();
		expect(onPauseMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(new Event('seeking'));
		expect(onSeekingMock).toHaveBeenCalled();
		expect(onSeekingMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(new Event('seeked'));
		expect(onSeekedMock).toHaveBeenCalled();
		expect(onSeekedMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(
			new Event('loadedmetadata')
		);
		expect(handleMetaDataMock).toHaveBeenCalled();
		expect(handleMetaDataMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(new Event('canplay'));
		expect(onCanPlayMock).toHaveBeenCalled();
		expect(onCanPlayMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(
			new Event('timeupdate')
		);
		expect(handleTimeUpdateMock).toHaveBeenCalled();
		expect(handleTimeUpdateMock.mock.calls.length).toEqual(1);

		VideoComp.getElement().ref.current.dispatchEvent(
			new Event('contextmenu')
		);

		wrapper.unmount();
	});
});
