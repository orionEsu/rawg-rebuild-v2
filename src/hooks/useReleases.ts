import { useInfiniteQuery } from '@tanstack/react-query';
import { GameCardData } from '../types';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import useGameQueryStore from '../store';

const apiClient = new APIClient('games');

const useReleases = (tag: string, startDate: string, endDate: string) => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const params = gameQuery.platformId || gameQuery.sortValue;

	return useInfiniteQuery({
		queryKey: [
			tag,
			gameQuery?.platformId || '',
			gameQuery?.sortValue || '',
		],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGameInfo<GameCardData>({
				params: {
					filter: true,
					dates: `${startDate},${endDate}`,
					...(params && {
						parent_platforms: gameQuery?.platformId,
						ordering: gameQuery?.sortValue,
					}),
					page: pageParam,
				},
			}),

		staleTime: hrToMs(24),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : null;
		},
	});
};

export default useReleases;
