import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import platforms from '../data/platforms';

const apiClient = new APIClient('platforms/lists/parents');

const useParentPlatform = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getGames,
		staleTime: hrToMs(24),
		initialData: platforms,
	});

export default useParentPlatform;
