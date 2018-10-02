import {UserConstants} from '../Constants/UserConstant.js';
import {Services} from '../Helpers/Service.js';
import {ResponseAction} from './Responses.js';

export const AuthActions = {
	login,
	signup,
	forgot
}

function login(credential) {

	return dispatch => {
        Services.loginService(credential)
		.then((response) => {
			if (response.status === 200)
			{
				dispatch(ResponseAction.success(response));
			}
			else
			{
				dispatch(ResponseAction.failure());
			}
		})
		.catch((response) => {
			dispatch(ResponseAction.error());
		});
		
    };	
}

function signup(data) {
	return {
		type : UserConstants.SIGNUP_REQUEST,
		payload : data
	}
}

function forgot(data) {
	return {
		type : UserConstants.FORGOT_REQUEST,
		payload : data
	}
}