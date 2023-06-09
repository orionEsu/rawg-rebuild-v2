import instance from '../services/url-client';
import { useQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: async () => {
			const res = await instance.get('genres');
			return res.data.results;
		},
		staleTime: hrToMs(24),
	});

export default useGenres;
