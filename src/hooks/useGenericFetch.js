import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import useGameQueryStore from '../store';

const useGenericFetch = (endpoint, type, key) => {
	
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const apiClient = new APIClient(`games?${type}=${endpoint}`);

	return useInfiniteQuery({
		queryKey: [
			key,
			endpoint,
			type === 'parent_platforms' ? gameQuery.platformId : null,
			gameQuery.sortValue
		],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGames({
				params: {
					filter: true,
					...(type === 'parent_platforms' && {
						parent_platforms: gameQuery?.platformId,
					}),
					ordering: gameQuery?.sortValue,
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

export default useGenericFetch;
