import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ReleaseAlbumImage} from '../constants';

const useStyles = makeStyles({
	introCover: {
		width: '90%',
		height: '70%',
		objectFit: 'cover'
	}
});

const ReleaseAlbum = () => {
	const classes = useStyles();

	return (
		<img
			src={ReleaseAlbumImage}
			alt="Release Album"
			className={classes.introCover}
		/>
	);
};

export default ReleaseAlbum;
