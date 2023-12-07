import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '8240aa126d27484897276d8f6c140a66',
	},
});

class APIClient {
	public endpoint: any;

	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	getGames = (params) =>
		instance.get(this.endpoint, params).then((res) => res.data);

	get = () =>
		instance
			.get(this.endpoint, {
				params: {
					filter: true,
				},
			})
			.then((res) => res.data);
}

export default APIClient;
