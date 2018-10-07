import axios from 'axios';
import {Urls} from '../Constants/PingURL.js';

export const Services = {
	authService
};

var requestHeader = '';

function header(Json){
	return { 
			data : JSON.stringify(Json),
			header : {'Content-Type' : 'application/json'}			
		}
}

function authService(data){
	
	requestHeader  = header(data);

	return axios.post(Urls.AUTH_URL, requestHeader);
}

