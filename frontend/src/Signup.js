import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';


class Signup extends Component {

	constructor(props) {
		super(props);
		//this.onSignupClick = this.onSignupClick.bind(this);
		this.onValidation = this.onValidation.bind(this);
		this.firstNameRef =  React.createRef();
		this.lastNameRef =  React.createRef();
		this.signupEmail = React.createRef();
	}


	handleFormSubmit = async (event, requestType) => {
    event.preventDefault();
    const firstName = event.target.elements.Firstname.value;
		const lastName = event.target.elements.lastname.value;
		const userName = event.target.elements.Username.value;
		const password = event.target.elements.Password.value;
		const category = event.target.elements.category.value;
		const email = event.target.elements.Email.value;
		const gender = event.target.elements.Gender.value;
		const dob = event.target.elements.DOB.value;

		console.log(firstName, lastName, password, category, email, gender, dob);

		axios.post('http://localhost:8000/api/signup/', {
		    firstname: firstName,
		    lastname: lastName,
		    username: userName,
		    password: password,
		    category: category,
		    email: email,
		    gender: gender,
		    dob: dob
		})
		.then(res => console.log(res))
		.catch(error => console.err(error));
/*
    const postObj = {
        firstName : event.target.elements.Firstname.value,
		lastName : event.target.elements.lastname.value,
		userName : event.target.elements.Username.value,
		password : event.target.elements.Password.value,
		category : event.target.elements.category.value,
		email : event.target.elements.Email.value,
		gender : event.target.elements.Gender.value,
		dob : event.target.elements.DOB.value
    }
*/
/*
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    */
/*
    if (requestType === "post") {
      await axios.post("http://localhost:8000/api/signup/", postObj)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        })
    }*/ /*else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        })
    }*/
  };


	render() {
		return (
					<div>
						<div id = "signupForm">
							<a data-toggle = 'modal' data-target = '#policy'><span className = 'glyphicon glyphicon-info-sign col-xs-11' style = {{textAlign : 'right',color : 'green',marginTop : '3%',marginBottom : '2%'}}></span></a>
							<form id = 'signup' className = 'form-horizontal'  onSubmit={(event) =>
            this.handleFormSubmit(
              event,
              "post" )}>
								<div className = 'form-group'>
									<label htmlFor = 'Firstname' className = 'info-label col-xs-4'>* First Name</label>
									<div className = 'col-xs-7'>
										<input type = 'text' className = 'form-control' name = 'Firstname' maxLength = '15' minLength = '3' placeholder = 'Enter First Name'
										ref = {this.firstNameRef} onBlur= {this.onValidation}  />
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'Lastname' className = 'info-label col-xs-4'>Last Name</label>
									<div className = 'col-xs-7'>
										<input type = 'text' className = 'form-control' name = 'lastname' maxLength = '20' minLength = '3' placeholder = 'Enter Last Name' ref = {this.lastNameRef} onBlur= {this.onValidation}  />
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'Username' className = 'info-label col-xs-4'>* User name</label>
									<div className = 'col-xs-7'>
										<input type = 'text' className = 'form-control' name = 'Username' placeholder = 'Enter User name' onBlur= {this.onValidation} />
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'Password' className = 'info-label col-xs-4'>* Password</label>
									<div className = 'col-xs-7'>
										<input type = 'password' className = 'form-control' name = 'Password' minLength = '8' placeholder = 'Enter Password' onBlur= {this.onValidation} />
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'Category' className = 'info-label col-xs-4'>Category</label>
									<div className = 'col-xs-7'>
										<select id = 'Category' className = 'form-control' name='category'>
											<option>Student</option>
											<option>Professional Employee</option>
											<option>Businessman</option>
										</select>
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'Email' className = 'info-label col-xs-4'>* Email</label>
									<div className = 'col-xs-7'>
										<input type = 'email' className = 'form-control' name = 'Email' placeholder = 'Enter email id' onBlur= {this.onValidation} />
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'Gender' className = 'info-label col-xs-4'>Sex</label>
									<div className = 'col-xs-7' style = {{textAlign : 'left'}}>
										<input type = 'radio'  name = 'Gender' value = 'Male' defaultChecked/> Male &nbsp;
										<input type = 'radio' name = 'Gender' value = 'Female'/> Female
									</div>
								</div>
								<div className = 'form-group'>
									<label htmlFor = 'DOB' className = 'info-label col-xs-4'>* DOB</label>
									<div className = 'col-xs-6'>
										<input type = 'date' className = 'form-control' name = 'DOB' onBlur= {this.onValidation}/>
									</div>
								</div>
								<div className = 'form-group'>
									<div className = 'col-xs-12' style = {{textAlign : 'center'}}>
										<input type = 'checkbox' name = 'Policy' defaultChecked disabled />  I agree with all the policy and agreement of the application owner
									</div>
								</div>
								<div className = 'form-group'>
									<div className = 'col-xs-12' style = {{textAlign : 'center'}} >
										<button className = 'btn btn-success' htmltype = 'submit' /*onClick = {this.onSignupClick}*/ name = 'submit'>Signup</button>
									</div>
								</div>
							</form>
						</div>
					
						<div className = 'modal fade' id = 'policy'>
								<div className = 'modal-dialog'>
									<div className = 'modal-content'>
										<div className = 'modal-body'>
											<table className = 'table table-striped'>
												<tbody>
													<tr>
														<td>Firstname</td>
														<td>Firstname should have only alphabets and atleast 3 characters.</td>
													</tr>
													<tr>
														<td>Lastname</td>
														<td>Lastname should have only alphabets and atleast 3 characters.</td>
													</tr>
													<tr>
														<td>Username</td>
														<td>It should have atleast 6 characters and should not contain any special character</td>
													</tr>
													<tr>
														<td>Password</td>
														<td>Password should have atleast one of uppercase, lowercase
															'!@#$%' special character. minimum length is 8.</td>
													</tr>
													<tr>
														<td>Email</td>
														<td>Email should only contain aplhanumeraic and period, period is not allowed at starting ex : a.a@abc.com</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
					</div>
	)};
	
	onValidation(event) {
	
		const regExpName  = /[^a-z]/ig;
		const regExpUname = /[^0-9a-zA-Z]/;
		const regExpPasswd = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])/;
		const regExpPasswd1 = /[^0-9a-zA-Z!@#$%]/;
		const regEmail1 = /^[a-zA-Z0-9]*([a-zA-Z0-9]+[\.])*[a-zA-Z0-9]+(\@[a-zA-Z0-9]+\.(?=(com|in|co.uk)$))/;
		const regEmail2 = /(?=[\.]{2,})/;
		const elemName = event.target.name.toLowerCase();
		const pTextExists = event.target.nextSibling === null ? true : false;
		const elemValue = event.target.value;
		let errorText = '';
		
		if(elemName === 'submit')
		{
			let inputs = document.getElementsByTagName('input');
			for(let i = 0; i < inputs.length ; i++)
			{
				if(i === 1)
				{
					continue;
				}
				if(inputs[i].value === '')
				{
					inputs[i].focus();
					return 1;
				}
			}
			return 0;
		}
		
		if(elemName === 'firstname' &&  (regExpName.test(elemValue.split(' ').join('')) || (elemValue.split(' ').join('').length < 3)))
		{
			errorText = 'Entered first name is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>';
		}
			
		if(elemName === 'lastname'  && (elemValue !== '' &&  (regExpName.test(elemValue.split(' ').join('')) || (elemValue.split(' ').join('').length < 3))))
		{
			errorText = 'Entered last name is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>';
		}
		
		if(elemName === 'username' &&  (regExpUname.test(elemValue) ===  true || (elemValue.length < 6)))
		{
			 errorText = 'Entered username is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>';
		}
			
		if(elemName === 'password' && (regExpPasswd.test(elemValue) ===  false || regExpPasswd1.test(elemValue) === true || (elemValue.split(' ').join('').length < 8)))
		{
			 errorText = 'Entered password is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>';
		}
		
		if(elemName === 'dob' && elemValue === '')
		{
			 errorText = 'Provide Date of Birth';
		}
		
		if(elemName === 'email' && (regEmail1.test(elemValue) === false ||  regEmail2.test(elemValue) === true  ) )
		{
			 errorText = 'Provide valid Email Id, please refer to policy <a data-toggle = "modal" data-target = "#policy">policy</a>';
		}
		
		if(pTextExists && errorText !== '')
		{
			const paraElem = document.createElement('P');
			paraElem.style.cssText = `text-align : left;
								 color : red; 
								 font-size : 10px;
								 margin : 0px;`;		
			paraElem.innerHTML = errorText;
			event.target.closest('div').append(paraElem);
		}
		else
		{
			if(pTextExists === false && errorText === '')
			{
				event.target.nextSibling.remove();
			}
		}
	}

	/*
	onSignupClick(event) {

		const signupFormElem = document.getElementById('signup').elements;
		const pTextElem = document.getElementsByTagName('P');
		if (this.onValidation(event) !== 1)
		{
			let formData = {};
		
			if(pTextElem.length !== 0)
			{
				pTextElem[0].previousSibling.focus();
			}
			else
			{				
					for(let elem in signupFormElem)
					{
					
						if(typeof signupFormElem[elem].tagName !== 'undefined' && signupFormElem[elem].tagName.toLowerCase() === 'input' && 
							signupFormElem[elem].name.toLowerCase() !== 'policy' )
						{
							if(signupFormElem[elem].name.toLowerCase() !== 'gender' || signupFormElem[elem].checked) 
							{
								formData[signupFormElem[elem].name.toLowerCase()] = signupFormElem[elem].value;
							}
						}
					}
		
					axios.post('http://localhost:8000/api/signup/', {
								data : JSON.stringify(formData)	})
						.then(response => console.log(response))
						.catch(error => console.log(error));
		
			}
		}

		event.preventDefault();
		const firstName = event.target.elements.Firstname.value;
		const lastName = event.target.elements.lastname.value;
		const userName = event.target.elements.Username.value;
		const password = event.target.elements.Password.value;
		const category = event.target.elements.category.value;
		const email = event.target.elements.Email.value;
		const gender = event.target.elements.Gender.value;
		const dob = event.target.elements.DOB.value;
		
	}*/

}

export default Signup;