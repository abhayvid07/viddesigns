import {UserConstants} from '../Constants/UserConstant.js';

export const ResponseAction = {
	success,
	failure,
	error
}

function success(data){ 
	return { 
		type : UserConstants.LOGIN_REQUEST,
		payload : true,
		data 
	}	
};

function failure(){ 
	return {
		type : UserConstants.LOGIN_REQUEST,
		payload : false
	}
};

function error(){
	return { 
		type : UserConstants.PAGE_ERROR,
		payload : true
	} 
};