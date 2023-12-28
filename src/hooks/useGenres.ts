import { useQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';
import APIClient from '../services/api-client';
import genres from '../data/genres';
import { GenreData } from '../types';


const apiClient = new APIClient('genres');
const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.getGameInfo<GenreData>({}),
		staleTime: hrToMs(24),
		initialData: genres,
	});

export default useGenres;
