import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization:
		       'Client-ID 50fdd5e8510405d91acf3b771d69c5d0c179cb0a98882b856ae04c37a024f00f'
	}
});
