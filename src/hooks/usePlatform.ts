import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const apiClient = new APIClient('platforms');

const usePlatform = () =>
	useQuery({
		queryKey: ['singlePlatform'],
		queryFn: apiClient.getGameInfo,
		staleTime: hrToMs(24),
	});
	
// const usePlatform = () =>
// 	useQuery({
// 		queryKey: ['singlePlatform'],
// 		queryFn: () => apiClient.getGameInfo<{}, { name: string }>({
// 			params: {}
// 		}),
// 		staleTime: hrToMs(24),
// 	});

export default usePlatform;
