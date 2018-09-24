import React, {Component} from 'react';
import Loadable from 'react-loadable';
import {Route} from 'react-router-dom';

const LoadableLogin = Loadable({
	loader : () =>  import('./Login'),
	loading : () => <div>Loading</div>
});

const LoadableSignup = Loadable( {
	loader : () => import('./Signup'),
	loading : () => <div>Loading</div>
});

const LoadableMainPage = Loadable( {
	loader : () =>  import('./MainPage'),
	loading : () => <div>Loading</div>
});

class WelcomePage extends Component {

	render() {
		return (
			<React.Fragment>
				<video autoPlay muted loop id = 'homeVideo'>
					<source src = { require ('./media/homeVideo.mp4') } type = 'video/mp4' />
				</video>
				<Route exact path = '/' component = {LoadableMainPage} />
				<Route exact path = '/login' component = {LoadableLogin} />
				<Route exact path = '/signup' component = {LoadableSignup} />
			</React.Fragment>
		)	
	}
}

export default WelcomePage;