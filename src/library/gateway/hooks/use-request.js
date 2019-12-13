import React, { useState } from 'react';
import axios from 'axios';

const useRequest = () => {
	const axiosInstance = axios.create({
		baseURL: 'https://data.gov.au/data/api'
	});
	const [client, setClient] = useState(axiosInstance);

	const request = async (url, config) => {
		return await client(url, config)
			.then(response => {
				return response;
			})
			.catch(error => {
				return error;
			})
	}
	const updateConfig = async (config) => {
		setClient(axios.create(config))
	}

	return [request, updateConfig]

}

export default useRequest;

