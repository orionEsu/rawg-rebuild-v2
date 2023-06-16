import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const apiClient = new APIClient('games');
const useGames = (gameQuery) => {
	const depObj = {
		genres: gameQuery?.genreId || null,
		parent_platforms: gameQuery?.platformId || null,
		ordering: gameQuery?.orderedValue || null,
		search: gameQuery?.searchValue || null,
	};

	return useQuery({
		queryKey: ['games', depObj],
		queryFn: () =>
			apiClient.getGames({
				params: {
					...depObj,
				},
			}),
		staleTime: hrToMs(24),
	});
};

export default useGames;
