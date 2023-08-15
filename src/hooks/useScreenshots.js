import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const useScreenshots = (slug) => {
	const apiClient = new APIClient(`games/${slug}/screenshots`);
	return useQuery({
		queryKey: [`${slug}-screenshots`],
		queryFn: () => apiClient.get(),
		staleTime: hrToMs(24),
		keepPreviousData: true,
	});
};

export default useScreenshots;
