import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

const apiClient = new APIClient('games');

const useGames = (gameQuery) => {
	return useInfiniteQuery({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGames({
				params: {
					genres: gameQuery?.genreId,
					parent_platforms: gameQuery?.platformId,
					ordering: gameQuery?.orderedValue,
					search: gameQuery?.searchValue,
					page: pageParam,
				},
			}),
		// page: pageParam,
		staleTime: hrToMs(24),
		keepPreviousData: true,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.results !== 0 ? allPages.length + 1 : null;
		},
	});
};

export default useGames;
