import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Welcomepage = Loadable({
	loader : () => import('./WelcomePage/WelcomePage'),
	loading : () => <div> Loading </div>
});

const Portal = Loadable({
	loader : () => import('./HomePage/Portal'),
	loading : () => <div> Loading </div>
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
					<Switch>
						<Route exact path = '/login/Home' component = {Portal} /> 
						<Route path = '/' component = {Welcomepage} />  
					</Switch>
				</div>
			</div>
			
		</Router>
    );
  }
}


export default App;
