import React, { Component } from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

class App extends Component {

	
	componentDidCatch(err, info) {
			console.log(err + ' : ' + info);
	}

  render() {
    return (
		<Router>
			<div className="App">
				<div className = 'container-fluid'>
				<video autoPlay muted loop id = 'homeVideo'>
					<source src = { require ('./media/homeVideo.mp4') } type = 'video/mp4' />
				</video>
				<Route exact path = '/' component = {LoadableMainPage} />
				<Route exact path = '/login' component = {LoadableLogin} />
				<Route exact path = '/signup' component = {LoadableSignup} />
				</div>
			</div>
			
		</Router>
    );
  }
}

export default App;
