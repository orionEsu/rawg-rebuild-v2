import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import { ParentPlatform } from '../types';

const apiClient = new APIClient('platforms/lists/parents');

const useParentPlatform = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () => apiClient.getGameInfo<ParentPlatform>({}),
		staleTime: hrToMs(24),
	});

export default useParentPlatform;
