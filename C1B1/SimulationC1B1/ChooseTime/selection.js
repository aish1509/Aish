import React from 'react';
import {makeStyles} from '@material-ui/styles';
import ReactHowler from 'react-howler';
import {calenderDays, ChooseDayAudio, BASE_PATH} from '../constants';

const useStyles = makeStyles({
	container: {
		position: 'relative',
		display: 'inline-block'
	},
	input: {
		padding: '0',
		width: '200px',
		border: '2px solid black',
		backgroundColor: '#fff',
		color: '#333',
		cursor: 'pointer',
		outline: '0',
		fontSize: '20px'
	},
	dropdown: {
		position: 'absolute',
		top: '100%',
		left: '0',
		width: '200px',
		zIndex: '2',
		border: '1px solid rgba(0, 0, 0, 0.04)',
		boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14)',
		backgroundColor: 'white'
	},
	ul: {
		listStyle: 'none',
		padding: '0',
		margin: '0'
	},
	li: {
		padding: '8px 12px',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.14)',
			cursor: 'pointer'
		}
	}
});
export default function Selection(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [inpVal, setInpVal] = React.useState('');
	const classes = useStyles({...props});
	const val = React.useRef(null);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	const [isPlaying, setIsPlaying] = React.useState(true);
	const handleEnd = () => {
		setIsPlaying(false);
	};

	React.useEffect(() => {
		var referenceValue = val.current;
		document.addEventListener('mousedown', e => {
			if (referenceValue && !referenceValue.contains(e.target)) {
				setIsOpen(false);
			}
		});

		document.addEventListener('mouseup', e => {
			if (referenceValue && referenceValue.contains(e.target)) {
				setIsOpen(false);
				setInpVal(e.target.textContent);
			}
		});

		return () => {
			document.addEventListener('mousedown', e => {
				if (referenceValue && !referenceValue.contains(e.target)) {
					setIsOpen(false);
				}
			});

			document.addEventListener('mouseup', e => {
				if (referenceValue && referenceValue.contains(e.target)) {
					setIsOpen(false);
					setInpVal(e.target.textContent);
				}
			});
		};
	}, [inpVal]);
	return (
		<div className={classes.container} ref={val}>
			<div style={{display: 'flex'}} onClick={handleClick}>
				<input
					type="dropdown"
					placeholder="select a Day"
					className={classes.input}
					readOnly
					value={inpVal}
				/>
				<div
					style={{
						width: '20px',
						height: '30px',
						border: '2px solid black',
						borderLeft: 'transparent',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
					id="down-arrow"
				>
					<div
						style={{
							height: '0px',
							width: '0px',
							borderLeft: '6px solid transparent',
							borderRight: '6px solid transparent',
							borderTop: '6px solid black',
							cursor: 'pointer'
						}}
					/>
				</div>
			</div>
			{isOpen && (
				<div className={classes.dropdown}>
					{isPlaying && (
						<ReactHowler
							onEnd={handleEnd}
							playing={isPlaying}
							src={`${BASE_PATH}${ChooseDayAudio}`}
						/>
					)}
					<ul className={classes.ul}>
						{calenderDays.map((day, index) => (
							<li key={index} className={classes.li}>
								{day}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
