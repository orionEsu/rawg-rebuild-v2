import url from '../services/url-client';
import { useEffect, useState } from 'react';

const useData = (path) => {
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

export default useData;
