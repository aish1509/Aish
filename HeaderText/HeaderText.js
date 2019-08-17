import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
	header: {
		marginBlockEnd: 0,
		marginBlockStart: '-3px',
		textTransform: 'uppercase',
		paddingTop: '8px'
	},
	subheader: {
		marginBlockEnd: 0,
		marginBlockStart: '-13px',
		textTransform: 'none',
		paddingTop: '5px'
	}
});

const HeaderText = ({children, classes, subheaderText}) => (
	<header>
		{subheaderText && (
			<h6 className={classes.subheader}>{subheaderText}</h6>
		)}
		<h3 className={classes.header}>{children}</h3>
	</header>
);

HeaderText.defaultProps = {
	classes: {},
	subheaderText: null,
	children: ''
};

HeaderText.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object,
	subheaderText: PropTypes.string
};

export default withStyles(styles)(HeaderText);
