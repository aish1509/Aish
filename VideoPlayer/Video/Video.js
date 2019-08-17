import React from 'react';
import PropTypes from 'prop-types';
import './video.css';

export default function Video({
	children,
	video,
	onPlay,
	onPause,
	onEnded,
	onSeeking,
	onSeeked,
	onCanPlay,
	handleMetaData,
	handleTimeUpdate,
	handleContextMenu,
	poster
}) {
	return (
		<video
			ref={video}
			controlsList="nodownload"
			id="v"
			width="100%"
			height="auto"
			crossOrigin="anonymous"
			onPlay={onPlay}
			onPause={onPause}
			onEnded={onEnded}
			onSeeking={onSeeking}
			onSeeked={onSeeked}
			onCanPlay={onCanPlay}
			onLoadedMetadata={handleMetaData}
			onTimeUpdate={handleTimeUpdate}
			onContextMenu={handleContextMenu}
			poster={poster}
		>
			{children}
		</video>
	);
}

Video.defaultProps = {
	children: React.node,
	onEnded: () => null,
	handleContextMenu: () => null
};
Video.propTypes = {
	children: PropTypes.node,
	video: PropTypes.object.isRequired,
	onPlay: PropTypes.func.isRequired,
	onPause: PropTypes.func.isRequired,
	onEnded: PropTypes.func,
	onSeeking: PropTypes.func.isRequired,
	onSeeked: PropTypes.func.isRequired,
	onCanPlay: PropTypes.func.isRequired,
	handleMetaData: PropTypes.func.isRequired,
	handleTimeUpdate: PropTypes.func.isRequired,
	handleContextMenu: PropTypes.func,
	poster: PropTypes.string
};
