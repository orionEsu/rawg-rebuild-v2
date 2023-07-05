import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const apiClient = new APIClient('platforms');

const usePlatform = () =>
	useQuery({
		queryKey: ['singlePlatform'],
		queryFn: apiClient.getGames,
		staleTime: hrToMs(24),
	});

export default usePlatform;
