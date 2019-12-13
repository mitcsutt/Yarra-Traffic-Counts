/**
 * External Dependencies
 */
import { useState } from 'react';
import axios from 'axios';

/**
 * Internal Dependencies
 */

const Request = async (url, config) => {

	console.log(config);
	return await axios(url, config)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		})


}

export default Request;

