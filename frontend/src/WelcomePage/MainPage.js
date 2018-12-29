import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/MainPage.css';


class MainPage extends Component {

	render() {
		
		return (
			<div style = {{ position : 'absolute', top : '0px', left : '0px', minWidth : '100%' }}>
				<section className = 'header' style = {{position : 'fixed',zIndex : '1', top : '0px', left : '0px'}}>
					<nav className = 'navbar navbar-inverse'>
						<div className = 'container-fluid'>
							<div className = 'navbar-header'>
								<span className = 'navbar-brand'>VID EDU PROJ</span>
							</div>
						
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Home</a></li>
								<li><a href="#footer">About us</a></li>
								<li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> SignUp</Link></li>
								<li className = 'dropdown'><a className = 'dropdown-toggle' href="#" data-toggle = 'dropdown'><span className="glyphicon glyphicon-log-in"></span> Login <span className="caret"></span></a>
									<ul className = 'dropdown-menu'>
										<li><a href = '#'> Social Login </a></li>
										<li><Link to = 'login'> Site Login </Link></li>
									</ul>
								</li>
							</ul>			
						</div>
					</nav>
				</section>
				<section>
					<div className = 'introduction'  style = {{ textAlign : 'center',padding : '0px',position : 'relative', minWidth : '100%',color : 'white',minHeight : '400px'}}>
						<div style = {{left : '0px',right : '0px',position : 'absolute', top : '25%',margin :'auto', wordWrap : 'normal', maxWidth : '70%'}}>
						<h1> DISCOVER YOU </h1>
						<h4>This project encompasses all the needs of different level of experinces 
							childhood school level to experineced proffesional, It makes lives easy and availability of resources at one place under one tree</h4>
						</div>
					</div>
					<div className = 'servicetile' style = {{padding : '0px', border : '50px solid white',textAlign : 'center', maxWidth : '100%', height : 'auto',backgroundColor : 'white'}}>
						<div className = 'tilediv'>
							<div style = {{ margin  : '0px', padding : '0px'}} >
								<h3><p style = {{color : 'black',fontFamily : 'Algerian'}}>Why we ??</p></h3>
							</div>
							<div className = 'tile'>
									<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '200px' height = '200px'/>
									<div>
										jkdjaksjsljadkljsda
									</div>
							</div>
							<div className = 'tile'>
									<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '200px' height = '200px'/>
									<div>
										jkdjaksjsljadkljsda
									</div>
							</div>
							<div className = 'tile'>
									<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '200px' height = '200px'/>
									<div>
										jkdjaksjsljadkljsda
									</div>
							</div>
						</div>
					</div>
				</section>
				<section id = 'footer' style = {{ maxWidth : '100%', minHeight : '350px',backgroundColor : 'black',padding : '30px'}}>	
							<div style = {{display : 'inline-block',margin :'2%', minWidth : '98%'}}>
								<div id = 'aboutus'>
									<h4><p>About Us</p></h4> 
									<p><i>"We as a company focuses on bringing different features for different experienece level under one tree"</i></p>
									<p>We started our journey on dd-mm-yyyy as a startup, we always try to ecompass all the needs of a user at one place
									we are a team to change the prospective of use of social media.</p>
								</div>
								<div id = 'contactus'>
									<div className = 'contactdetail'>
										<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '30px' height = '30px'/>&nbsp;&nbsp;www.twitter.com
									</div>
									<div className = 'contactdetail'>
										<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '30px' height = '30px'/>&nbsp;&nbsp;www.facebook.com
									</div>
									<div className = 'contactdetail'>
										<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '30px' height = '30px'/>&nbsp;&nbsp;www.linkedin.com
									</div>
									<div className = 'contactdetail'>
										<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '30px' height = '30px'/>&nbsp;&nbsp;Follow us on Instagram
									</div>
									<div className = 'contactdetail'>
										<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '30px' height = '30px'/>&nbsp;&nbsp;+91-9123456780
									</div>
									<div className = 'contactdetail'>
										<img className = 'img-thumbnail' src = { require('../media/twitter.png') } alt = 'twitter' width = '30px' height = '30px'/>&nbsp;&nbsp;kislay.vid17@gmail.com
									</div>
								</div>
							</div>
							<div id = 'copyright'>
								<span className = 'glyphicon glyphicon-copyright-mark'></span> Copyrights are reserved with VID EDU PROJ
							</div>	
					</section>
			</div>
		)
	}
}

export default MainPage;