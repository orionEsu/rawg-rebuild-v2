import { useInfiniteQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

const apiClient = new APIClient('games');

const useReleases = (tag, startDate, endDate) => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	
	return useInfiniteQuery({
		queryKey: [
			tag,
			gameQuery?.platformId || '',
			gameQuery?.sortValue || '',
		],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGames({
				params: {
					filter: true,
					dates: `${startDate},${endDate}`,
					parent_platforms: gameQuery?.platformId,
					ordering: gameQuery?.sortValue,
					page: pageParam,
				},
			}),

		staleTime: hrToMs(24),
		keepPreviousData: true,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.results !== 0 ? allPages.length + 1 : null;
		},
	});
};

export default useReleases;