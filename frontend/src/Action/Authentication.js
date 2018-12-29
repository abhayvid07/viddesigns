import {Services} from '../Helpers/Service.js';
import {ResponseAction} from './Responses.js';
import {history} from '../Helpers/history.js';

export const AuthActions = {
	login,
	signForgot
}

function login(credential) {

	return dispatch => {
        Services.authService(credential)
		.then((response) => {
			if (response.status === 200)
			{
				dispatch(ResponseAction.success());
				dispatch(ResponseAction.UserData(response));
				history.push('/login/home');
			}
			else
			{
				dispatch(ResponseAction.failure());
			}
		})
		.catch((err) => {
			dispatch(ResponseAction.error(err.message));
		});
    };	
}

function signForgot(data) {
	
	return dispatch => {
		Services.authService(data)
		.then((response) => {
			if(response.status === 200)
			{
				history.push('/login');
			}
			else
			{
				dispatch(ResponseAction.failure());
			}
		})
		.catch((error) => {
			dispatch(ResponseAction.error());
		});	
	}
}