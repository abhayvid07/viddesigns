import React, { Component } from 'react';


class AdminPage extends Component {
	
	render() {
		return (
				<div className = 'adminPage'>
					<form id = 'adminPage' className = 'form-horizontal'>
						<div className = 'form-group'>
							<label htmlFor = 'level' className = 'col-sm-4'>Select your occupation</label>
							<div className = 'col-sm-7'>
								<select name = 'level'>
									<option name = 'Student'> Student </option>
									<option name = 'Employee'> Employee </option>
									<option name = 'Businessman'> Businessman </option>
								</select>
							</div>
						</div>
					</form>
				</div>
	    )
	};
}

export default AdminPage;