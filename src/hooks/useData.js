import url from '../services/url-client';
import { useEffect, useState } from 'react';

const useData = (path, params, gameQuery) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [dataFetched, setDataFetched] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		async function getPost() {
			try {
				const res = await url.get(path, {
					signal: controller.signal,
					...params,
				});

				if (res.data.results.length === 0)
					throw Error('No Games in this platform');

				setError('');
				setData(res.data.results);
				setDataFetched(true)
			} catch (error) {
				if (error.message !== 'canceled') setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		getPost();

		return () => controller.abort();
	}, [
		gameQuery?.selected,
		gameQuery?.selectedPlatform,
		gameQuery?.orderedValue,
		gameQuery?.searchValue,
	]);

	if(!dataFetched) return {data: [], error: '', isLoading: true}
 
	return { data, error, isLoading };
};

export default useData;