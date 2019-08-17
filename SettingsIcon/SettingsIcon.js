import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Settings from '@material-ui/icons/Settings';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import './SettingsIcon.scss';

import React from 'react';

const SettingsIcon = ({onSettingsClick}) => {
	const handleSettingsClick = e => {
		e.preventDefault();
		onSettingsClick();
	};

	return (
		<div className="settings-icon">
			<IconButton onClick={handleSettingsClick}>
				<Settings style={{color: 'white', fontSize: '20px'}} />
				<ArrowDropDown style={{color: 'white', fontSize: '28px'}} />
			</IconButton>
		</div>
	);
};

SettingsIcon.propTypes = {
	onSettingsClick: PropTypes.func.isRequired
};

export default SettingsIcon;
