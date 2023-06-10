import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: async () => {
			const res = await instance.get('platforms/lists/parents');
			return res.data.results;
		},
		staleTime: hrToMs(24),
	});

export default usePlatforms;
