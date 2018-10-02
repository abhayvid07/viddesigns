import axios from 'axios';
import {Urls} from '../Constants/PingURL.js';

export const Services = {
	loginService
};

function loginService(credential){
	
	const requestHeader = { 
			data : JSON.stringify(credential),
			header : {'Content-Type' : 'application/json'}			
		}

	return axios.post(Urls.AUTH_URL, requestHeader)
	.then((response) => {
		return response;
	});
}

