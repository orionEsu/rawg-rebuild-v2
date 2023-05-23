import axios from 'axios';

const url = axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '8240aa126d27484897276d8f6c140a66',
	},
});

export default url;