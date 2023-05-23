import axios from 'axios';
import { useEffect, useState } from 'react';

const url = axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '8240aa126d27484897276d8f6c140a66',
	},
});
console.log(url);
const useGames = (path) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
        
		async function getPost() {
			try {
				const res = await url.get(path, { signal: controller.signal });
				setData(res.data.results);
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		getPost();

		// return () => controller.abort();
	}, []);

	return { data, error, isLoading };
};

export default useGames;
