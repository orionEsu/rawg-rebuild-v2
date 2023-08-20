import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const useSuggested = (slug) => {
	const apiClient = new APIClient(`games/${slug}/game-series`);
	return useQuery({
		queryKey: [`otherGameIn-${slug}-series`],
		queryFn: () => apiClient.get(),
		staleTime: hrToMs(24),
	});
};

export default useSuggested;
