import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {shareVideoOptions} from '../constants';
import BroadCast from './broadCast';
import {smallImages} from '../constants';

export const TagContext = React.createContext();

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},
	customDropDown: {
		width: '80%',
		border: '1px solid black'
	}
});

export default function DropDown({data, ...rest}) {
	const [selectedText, setSelectedText] = React.useState('');
	const [indexVal, setIndexVal] = React.useState();
	const classes = useStyles(rest);
	const _onChange = e => {
		setSelectedText(e.target.value);
	};
	return (
		<div className={classes.container}>
			<div
				style={{
					display: 'flex'
				}}
			>
				<img
					src={smallImages[localStorage.getItem('smallImg')]}
					alt="Genre pics"
					style={{
						height: '40px',
						width: '40px',
						marginLeft: '80px',
						marginRight: '10px'
					}}
				/>
				<input
					list="browsers"
					name="myBrowser"
					className={classes.customDropDown}
					onChange={_onChange}
					style={{
						fontWeight: 'bold',
						height: '20px'
					}}
				/>
				<datalist id="browsers">
					{data.map((value, index) => {
						return <option key={index} value={value} />;
					})}
				</datalist>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '20px'
				}}
			>
				<TagContext.Provider value={[indexVal, setIndexVal]}>
					<CheckboxContainer
						numberToRender={4}
						labeldata={shareVideoOptions}
						selectionText={selectedText}
					/>
					<BroadCast selectionText={selectedText} />
				</TagContext.Provider>
			</div>
		</div>
	);
}

export const CheckboxContainer = ({numberToRender, labeldata}) => {
	return Array(numberToRender)
		.fill(null)
		.map((_, index) => {
			return (
				<div
					key={index}
					style={{
						marginLeft: '80px'
					}}
				>
					<CheckBox labeldata={labeldata} index={index} />
				</div>
			);
		});
};

const CheckBox = ({labeldata, index}) => {
	const [value, setValue] = React.useState(false);
	// eslint-disable-next-line no-unused-vars
	const [indexVal, setIndexVal] = React.useContext(TagContext);
	const _onChange = (e, index) => {
		setValue(!value);
		if (e.target.checked) {
			setIndexVal(index);
		} else {
			setIndexVal(undefined);
		}
	};
	return (
		<>
			<input
				type="checkbox"
				id={labeldata[index]}
				checked={value}
				onChange={e => _onChange(e, index)}
			/>
			<label htmlFor={labeldata[index]}>
				<strong>{labeldata[index]}</strong>
			</label>
		</>
	);
};
