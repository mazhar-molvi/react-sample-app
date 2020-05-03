import * as Types from '../constants/services';
import axios from 'axios';

const setServices = services => ({
  type: Types.SET_SERVICES,
  payload: services
});


const setProviders = providers => ({
  type: Types.SET_PROVIDERS,
  payload: providers
});

export const fetchServices = () => async dispatch => {
	try {
		const response = await axios.get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services');
		dispatch(setServices(response.data.data));
	}
	catch(e) {
		console.error(e);
	}
};

export const fetchProviders = () => async dispatch => {
	try {
		const response = await axios.get('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10');
		dispatch(setProviders(response.data.data));
	}
	catch(e) {
		console.error(e);
	}
};

