import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, Switch, Router} from 'react-router-dom';
import {URLS} from './routes';
import Slider from './Slider';
import ReleaseAlbum from './ReleaseAlbum';
import MusicGenre from './MusicGenre';
import ResultsPage from './ResultsPage';
import IntroVideo from './IntroVideoPage';

const SimulationC1B1Routes = ({path, history}) => (
	<Router history={history}>
		<Switch>
			<Route path={`${path}${URLS.ROOT}`} component={ReleaseAlbum} />
			<Route path={`${path}${URLS.VIDEO}`} component={IntroVideo} />
			<Route path={`${path}${URLS.MUSICGENRE}`} component={MusicGenre} />
			<Route path={`${path}${URLS.RAISEFUNDS}`} component={Slider} />
			<Route path={`${path}${URLS.SETUPREWARDS}`} component={Slider} />
			<Route path={`${path}${URLS.SHAREVIDEO}`} component={Slider} />
			<Route path={`${path}${URLS.CHOSETIME}`} component={Slider} />
			<Route path={`${path}${URLS.RESULT}`} component={ResultsPage} />
			<Route
				path={`${path}`}
				render={() => (
					<Redirect
						from={`${path}/`}
						exact
						to={`${path}${URLS.ROOT}`}
					/>
				)}
			/>
		</Switch>
	</Router>
);

SimulationC1B1Routes.propTypes = {
	path: PropTypes.string.isRequired,
	history: PropTypes.object.isRequired
};

export default SimulationC1B1Routes;
