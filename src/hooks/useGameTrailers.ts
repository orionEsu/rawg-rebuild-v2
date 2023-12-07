import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const useGameTrailers = (slug) => {
	const apiClient = new APIClient(`games/${slug}/movies`);
	return useQuery({
		queryKey: [`${slug}-trailers`],
		queryFn: () => apiClient.get(),
		staleTime: hrToMs(24),
	});
};

export default useGameTrailers;
