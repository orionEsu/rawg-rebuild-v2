import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import useGameQueryStore from '../store';

const useGames = (endpoint: string, key: string) => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const apiClient = new APIClient(`games${endpoint}`);

	const query = useQuery({
		queryKey: [`${key}--title`],
		queryFn: () =>
			apiClient.getGames({
				params: {
					filter: true,
				},
			}),
		staleTime: hrToMs(24),
	});
	
	const infiniteQuery = useInfiniteQuery({
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
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : null;
		},
	});

	return { infiniteQuery, query };
};

export default useGames;
