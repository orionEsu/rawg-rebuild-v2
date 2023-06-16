import { useQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';
import APIClient from '../services/api-client';

const apiClient = new APIClient('genres');
const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getGames,
		staleTime: hrToMs(24),
	});

export default useGenres;
