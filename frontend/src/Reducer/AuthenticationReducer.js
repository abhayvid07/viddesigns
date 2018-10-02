import {UserConstants} from '../Constants/UserConstant.js';

export default function Authentication(userState = {userData : {},loggedIn : false}, action) {
	
	if(action.type === UserConstants.LOGIN_REQUEST && action.payload)
	{
		return Object.assign({},{userState,userData : action.data,loggedIn : true});
	}
	else if(action.type === UserConstants.SIGNUP_REQUEST)
	{
	
		return userState;
	}
	
		return userState;
	

}