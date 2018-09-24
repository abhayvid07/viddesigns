import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor(props)
	{
			super(props);
			this.forgotClick = this.forgotClick.bind(this);
			this.modalClose = this.modalClose.bind(this);
			this.getLogin = this.getLogin.bind(this);
			this.userNameRef = React.createRef();
			this.passwordRef = React.createRef();
			this.getForgot = this.getForgot.bind(this);
			this.forgotEmail = React.createRef();
	}

	render() {
		return (
				<div id = 'homeLogin'>
					<form id = 'login' className = 'form-horizontal'>
							<div className = 'form-group'>
								<label htmlFor = 'Username' className = 'info-label col-xs-3'>User name</label>
								<div className = 'col-xs-8'>
									<input type = 'text' className = 'form-control' id = 'Username' minLength = '5' placeholder = 'Enter User name'
										ref = {this.userNameRef} />
								</div>
							</div>
							<div className = 'form-group'>
								<label htmlFor = 'Password' className = 'info-label col-xs-3'>Password</label>
								<div className = 'col-xs-8'>
									<input type = 'password' className = 'form-control' id = 'Password' placeholder = 'Enter Password'
									ref = {this.passwordRef} />
								</div>
							</div>
							<div className = 'form-group'>
								<div className = 'container-fluid'>
								<div className = 'col-xs-4' style = {{textAlign : 'left'}}>
									<input type = 'checkbox' id = 'loginRemember' />  Remember me
								</div>
								<div className = 'col-xs-7' style = {{textAlign : 'right'}} >
									<button className = 'btn btn-success' onClick = {this.getLogin} >Login</button>
								</div>
								</div>
							</div>
							<div className = 'form-group col-xs-3' style = {{textAlign : 'right'}}>
								<a data-toggle = 'modal' data-target = '#forgotForm'> Forgot Login </a>			
							</div>
					</form>
					
					<div className = 'modal fade' id = 'policy'>
							<div className = 'modal-dialog'>
								<div className = 'modal-content'>
									<div className = 'modal-body'>
										<table className = 'table table-striped'>
											<tbody>
													<tr>
														<td>Username</td>
														<td>It should have atleast 6 characters and should not contain any special character</td>
													</tr>
													<tr>
														<td>Password</td>
														<td>Password should have atleast one of uppercase, lowercase
															'!@#$%' special character. minimum length is 8.</td>
													</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					
				<div id = 'forgotForm' className = 'modal fade' role = 'dialog'>
							<div className="modal-dialog">
								<div className = 'modal-content'>
									<div className = 'modal-header'>
										<p style = {{color : 'red'}}>Reset Link will be sent to Email id</p>
									</div>
									<div className = 'modal-body'>
										<form id = 'Forgot' className = 'form-horizontal'>
											<div className = 'form-group'>
												<label htmlFor = 'Email' className = 'col-xs-3'>Email Id * </label>
												<input type = 'email' id = 'forgotEmail' name = 'Email' className = 'col-xs-8' placeholder = 'Enter your Email Id' 
													ref = {this.forgotEmail}/>
											</div>
											<div style = {{textAlign : 'right'}}>
													<button className = 'btn btn-info ' onClick = {this.getForgot}>Send</button>
											</div>
										</form>
									</div>
								</div>
							</div>
				</div>
			</div>
		)
	}
	
	forgotClick() {
		this.forgotFormRef.current.style.display = 'block';
	}
	
	getLogin(e) {
			
		/*if(document.getElementById('loginRemember').checked === true)
		{
			new Cookies().set('loginCred',{'u_name' : document.getElementById('Username').value , 'passwd' : document.getElementById('Password').value });
		}
		
		console.log(new Cookies().get('loginCred'));*/
		const errorExists = this.passwordRef.current.nextSibling !== null ? true : false;
		const regExpUname = /[^0-9a-zA-Z]/;
		const regExpPasswd = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])/;
		const regExpPasswd1 = /[^0-9a-zA-Z!@#$%]/;
		const elemValueUserName = this.userNameRef.current.value;
		const elemValuePassword = this.passwordRef.current.value;
		
		if( (regExpUname.test(elemValueUserName) ===  true || (elemValueUserName.length < 6)) || (regExpPasswd.test(elemValuePassword) ===  false || regExpPasswd1.test(elemValuePassword) === true || (elemValuePassword.split(' ').join('').length < 8)) )
		{
			if(errorExists === false)
			{
				const loginError = document.createElement('P')
				loginError.innerHTML = 'Please fill all the required fields as per <a data-toggle = "modal" data-target = "#policy"> Policy </a>';
				loginError.style.cssText = `text-align : left;
								 color : red; 
								 font-size : 10px;
								 margin : 0px;`
				this.passwordRef.current.parentNode.append(loginError);
			}
			e.preventDefault();
		}
		else
		{
			 if(errorExists === true)
			 {
				this.passwordRef.current.nextSibling.remove();		
			 }
			 axios.get('http://localhost:4000/asd')
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}	
	}
	
	getForgot(e) {
	
		const errorExists = this.forgotEmail.current.nextSibling !== null ? true : false;
		const regEmail1 = /^[a-zA-Z0-9]*([a-zA-Z0-9]+[\.])*[a-zA-Z0-9]+(\@[a-zA-Z0-9]+\.(?=(com|in|co.uk)$))/;
		const regEmail2 = /(?=[\.]{2,})/;
		
		if(errorExists  ===  false && (regEmail1.test(this.forgotEmail.current.value) === false ||  regEmail2.test(this.forgotEmail.current.value) === true ))
		{
			 const forgotError = document.createElement('P')
			 forgotError.innerHTML = 'Please provide valid email id';
			 this.forgotEmail.current.parentNode.append(forgotError);
		}
		else if(regEmail1.test(this.forgotEmail.current.value) === true &&  regEmail2.test(this.forgotEmail.current.value) === false )
		{
			 if(errorExists)
			 {
				this.forgotEmail.current.nextSibling.remove();		
			 }
			axios.get('http://localhost:4000/asd')
				.then(response => console.log(response))
				.catch(error => console.log(error));
		}
		e.preventDefault();
	
	}
	
	
	modalClose() {
		this.forgotEmail.current.value = '';
	}
}

export default Login;