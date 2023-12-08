import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const useGameDetails = (endpoint: string) => {
	const apiClient = new APIClient(`games/${endpoint}`);

	return useQuery({
		queryKey: [endpoint],
        queryFn:  apiClient.get,
		staleTime: hrToMs(24),
	});
};

export default useGameDetails;
