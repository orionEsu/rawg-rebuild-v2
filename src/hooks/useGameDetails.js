import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const useGameDetails = (endpoint) => {
	const apiClient = new APIClient(`games/${endpoint}`);

	return useQuery({
		queryKey: [endpoint],
        queryFn:  apiClient.get,
		staleTime: hrToMs(24),
		keepPreviousData: true,
	});
};

export default useGameDetails;
