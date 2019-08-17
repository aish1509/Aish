import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {musicImgCollection} from '../constants';

const cardStyles = makeStyles({
	container: {
		height: '100%',
		width: '100%',
		borderRadius: '2%',
		transition: ' transform 0.2s',
		border: props =>
			props.index === props.selectedIndex ? '8px solid green' : null,
		'&:hover': {
			transform: 'scale(1.5)',
			border: '8px solid green',
			cursor: 'pointer'
		},
		backgroundImage: props => `url(${props.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}
});

const HoveredCard = ({index, selectedIndex, url, handleIndex}) => {
	const classes = cardStyles({index, selectedIndex, url});
	return (
		<div
			className={classes.container}
			index={index}
			selectedIndex={selectedIndex}
			key={index}
			url={url}
			onClick={handleIndex}
		/>
	);
};

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginTop: '4%'
	},
	donationBox: {
		marginLeft: '20px',
		border: '2px solid grey',
		height: '30px',
		width: '200px',
		color: '#1030e6',
		fontWeight: 'bold',
		fontSize: '12pt',
		outline: 'none'
	},
	gridDiv: {
		display: 'grid',
		gridTemplateColumns: 'repeat(6, minmax(150px, 1fr))',
		gridTemplateRows: '200px',
		gridGap: '10px',
		rowGap: '10px',
		width: '100%',
		height: '100%',
		placeItems: 'center center'
	},
	backgroundLayoutContainer: {
		height: '70%',
		width: '90%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default function MusicGenre() {
	const [value, setValue] = useState('');
	const [selectedIndex, setSelectedIndex] = useState();
	const classes = useStyles();
	const handleChange = e => {
		const {value} = e.target;
		setValue(value);
	};

	const handleIndex = index => {
		setSelectedIndex(index);
	};

	React.useEffect(() => {
		switch (selectedIndex) {
			case 0:
				localStorage.setItem('coverImg', 'rock');
				localStorage.setItem('smallImg', 'rock');
				break;
			case 1:
				localStorage.setItem('coverImg', 'electronic');
				localStorage.setItem('smallImg', 'electronic');
				break;
			case 2:
				localStorage.setItem('coverImg', 'pop');
				localStorage.setItem('smallImg', 'pop');
				break;
			case 3:
				localStorage.setItem('coverImg', 'country');
				localStorage.setItem('smallImg', 'country');
				break;
			case 4:
				localStorage.setItem('coverImg', 'hiphop');
				localStorage.setItem('smallImg', 'hiphop');
				break;
			case 5:
				localStorage.setItem('coverImg', 'indie');
				localStorage.setItem('smallImg', 'indie');
				break;
			default:
				break;
		}
	}, [selectedIndex]);

	React.useEffect(() => {
		localStorage.setItem('inputVal', value);
	}, [value]);
	return (
		<div className={classes.backgroundLayoutContainer}>
			<h2>MUSIC GENRE</h2>
			<div className={classes.gridDiv}>
				{Array(6)
					.fill(null)
					.map((_, index) => (
						<HoveredCard
							index={index}
							selectedIndex={selectedIndex}
							key={index}
							url={musicImgCollection[index]}
							handleIndex={() => handleIndex(index)}
						/>
					))}
			</div>
			<div className={classes.container}>
				<label>ALBUM NAME</label>
				<input
					type="text"
					className={classes.donationBox}
					value={value}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}
