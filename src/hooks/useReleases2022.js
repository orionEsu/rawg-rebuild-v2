import { useInfiniteQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

const apiClient = new APIClient(
	'games/lists/greatest?year=2022&discover=true&ordering=-added&page_size=40'
);

const useReleases2022 = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	return useInfiniteQuery({
		queryKey: [
			'releases-2022',
			gameQuery?.platformId || '',
			gameQuery?.sortValue || '',
		],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGames({
				params: {
					filter: true,
					parent_platforms: gameQuery?.platformId,
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

export default useReleases2022;
