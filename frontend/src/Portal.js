import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import './Portal.css';
import Feeds from './Feeds.js';
import Connection from './Connection.js';
import Loadable from 'react-loadable';
import Posts from './Posts.js';

const postsLoadable = Loadable({ 
	loader : () => import('./Posts'),
	loading : () => <div>Loading</div>
});


class Portal extends Component {

	render() {
		return(
				<div className = 'studentPortal'>
		
					<section className = 'header' style = {{border : '2px solid white', margin : '0px', minHeight : '5%'}}>
						<nav className = 'navbar navbar-default'  style = {{margin : '0px'}}>
							<div className = 'container-fluid'>
							<div className = 'navbar-header'>
							<div className = 'navbar-brand' style = {{ paddingTop : '2%'}}>
								<img className = 'img-circle' src = { require('./media/profile.jpg') } alt = 'twitter' style = {{border : '1px solid white'}} width = '40px' height = '40px'/> 
							</div>
							<div className = 'navbar-brand'>
								<li className = 'dropdown'><p className = 'dropdown-toggle' href="#" data-toggle = 'dropdown'>Hello Kumar <span className="caret"></span></p>
									<ul className = 'dropdown-menu' id = 'menu'>
										<li><Link to = 'MyAccount'> My Account </Link></li>
										<li><Link to = 'Settings'> Settings </Link></li>
										<li><Link to = 'Privacy'> Privacy </Link></li>
										<li><Link to ='#'>Log out</Link></li>
									</ul>
								</li>
							</div>
							</div>
							<div className = 'nav navbar-nav navbar-right' style = {{minWidth : '30%', marginTop : '1%'}} >
								<form id = 'searchForm' className = 'form-inline'>
									<input type = 'text' id = 'search' className = 'form-control' placeholder = 'Search'/>
									<button className = 'form-control'><span className = 'glyphicon glyphicon-search'></span></button>
								</form>
							</div>
							</div>
						</nav>
					</section>
					<section className =  'content'>
						<Feeds />
						<Posts />
						<Connection />
					</section>

				</div>
	) }
}

export default Portal;