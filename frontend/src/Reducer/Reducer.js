import Authentication from './AuthenticationReducer.js';
import UserData from './UserDataReducer.js';
import {combineReducers} from 'redux';

export default combineReducers({
	Authentication,
	UserData
});