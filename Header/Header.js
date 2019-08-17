import React from 'react';
import PropTypes from 'prop-types';
import {HeaderText, M180Header} from '@math/common';
import {ZoneHeader} from '@math/m180';
import history from '../../utils/history';

const Header = ({pathname}) => {
	const handleNavigation = () => history.push('/welcome');
	switch (pathname) {
		case '/cat':
			return (
				<M180Header firstName="firstname" lastName="lastname">
					Question Validation Tool
				</M180Header>
			);
		case '/explorezone':
			return (
				<ZoneHeader
					firstName="firstname"
					lastName="lastname"
					zoneName="EXPLORE_ZONE"
					onHomeClick={handleNavigation}
				>
					<HeaderText subheaderText="Block 1: Multiplicative Thinking">
						Explore Zone
					</HeaderText>
				</ZoneHeader>
			);
		case '/explorezone/anchorvideo':
			return (
				<ZoneHeader
					firstName="firstname"
					lastName="lastname"
					zoneName="EXPLORE_ZONE"
					onHomeClick={handleNavigation}
				>
					<HeaderText subheaderText="Block 1: Multiplicative Thinking">
						Explore Zone
					</HeaderText>
				</ZoneHeader>
			);

		case '/explorezone/simulation':
			return (
				<ZoneHeader
					firstName="firstname"
					lastName="lastname"
					zoneName="EXPLORE_ZONE"
					onHomeClick={handleNavigation}
				>
					<HeaderText subheaderText="Block 1: Multiplicative Thinking">
						Explore Zone
					</HeaderText>
				</ZoneHeader>
			);

		default:
			return (
				<M180Header firstName="firstname" lastName="lastname">
					MATH 180
				</M180Header>
			);
	}
};

Header.propTypes = {
	pathname: PropTypes.string.isRequired
};

export default Header;
