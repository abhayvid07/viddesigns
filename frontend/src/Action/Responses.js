import {UserConstants} from '../Constants/UserConstant.js';

export const ResponseAction = {
	success,
	failure,
	error
}

function UserData(data){ 
	return { 
		type : UserConstants.LOAD_DATA,
		data 
	}	
};

function failure(){ 
	return {
		type : UserConstants.REQUEST_FAILED,
		payload : 'not found'
	}
};

function error(info){
	return { 
		type : UserConstants.PAGE_ERROR,
		info
	} 
};

function success() {
	return {
		type : UserConstants.LOGIN_REQUEST,
		payload : true
	}
};