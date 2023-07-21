import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import useGameQueryStore from '../store';


const useGames = (endpoint, key) => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const apiClient = new APIClient(`games${endpoint}`);

	return useInfiniteQuery({
		queryKey: [key, gameQuery.sortValue, gameQuery.searchValue],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGames({
				params: {
					filter: true,
					ordering: gameQuery?.sortValue,
					search: gameQuery?.searchValue,
					page: pageParam,
				},
			}),
		staleTime: hrToMs(24),
		keepPreviousData: true,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : null;
		},
	});
};

export default useGames;
