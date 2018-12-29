import {UserConstants} from '../Constants/UserConstant.js';

export default function UserData(userData = {Data : {}}, action) {
	if(action.type === UserConstants.LOAD_DATA) {
		return Object.assign({}, userData, {Data : action.data});
	}
	
	return userData;
}