import React, { Component } from 'react';
import './Styles/App.css';
import { Router, Route, Switch } from 'react-router-dom';
import {history} from './Helpers/history.js';
import Loadable from 'react-loadable';
import {connect} from 'react-redux';

const Welcomepage = Loadable({
	loader : () => import('./WelcomePage/WelcomePage'),
	loading : () => <div> Loading </div>
});

const Portal = Loadable({
	loader : () => import('./HomePage/Portal'),
	loading : () => <div> Loading </div>
});


class App extends Component {

	constructor(props) {
		super(props);	
		const homeRegex = /^(\/login\/home)(\/*[a-zA-Z]*)/;
	
		if(homeRegex.test(history.location.pathname))
		{
			console.log(this.props.loggedIn);
			history.goBack();
		}
	}
	
	componentDidCatch(err, info) {
		console.log(err + ' : ' + info);
	}

  render() {
    return (
		<Router history = {history}>
			<div className="App">
				<div className = 'container-fluid'>
					<Switch>
						<Route path = '/login/Home' component = {Portal} /> 
						<Route path = '/' component = {Welcomepage} />  
					</Switch>
				</div>
			</div>
			
		</Router>
    );
  }
}


export default App;
