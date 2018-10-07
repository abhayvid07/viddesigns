import React, {Component} from 'react';
import Loadable from 'react-loadable';
import {Route, Switch} from 'react-router-dom';

const LoadableLogin = Loadable({
	loader : () =>  import('../AuthenticationPages/Login'),
	loading : () => <div>Loading</div>
});

const LoadableSignup = Loadable( {
	loader : () => import('../AuthenticationPages/Signup'),
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
					<source src = { require ('../media/homeVideo.mp4') } type = 'video/mp4' />
				</video>
				<Switch>
					<Route path = '/login' component = {LoadableLogin} />
					<Route path = '/signup' component = {LoadableSignup} />
					<Route path = '/' component = {LoadableMainPage} />
				</Switch>
			</React.Fragment>
		)	
	}
}

export default WelcomePage;