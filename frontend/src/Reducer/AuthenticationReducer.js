import {UserConstants} from '../Constants/UserConstant.js';

export default function Authentication(userState = {loggedIn : false, message : '', error : ''}, action) {
	
	if(action.type === UserConstants.LOGIN_REQUEST)
	{
		return Object.assign({}, userState, {loggedIn : action.payload, message : '', error : ''});
	}
	else if(action.type === UserConstants.REQUEST_FAILED)
	{
		return Object.assign({}, userState, {message : action.payload, loggedIn : false, error : ''});
	}
	else if(action.type === UserConstants.PAGE_ERROR)
	{
		return Object.assign({}, userState, {error : action.info, loggedIn : false, message : ''});
	}
	else {
		return userState;
	}
}