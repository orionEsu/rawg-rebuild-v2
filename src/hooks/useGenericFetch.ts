import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import useGameQueryStore from '../store';
import { GameCardData } from '../types';
import { APIHeading } from '../types';



const useGenericFetch = (endpoint: string, type: string, key: string) => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const apiClient = new APIClient(`games?${type}=${endpoint}`);

	const query = useQuery({
		queryKey: [`${key}--title`],
		queryFn: () =>
			apiClient.getGameInfo<APIHeading>({
				params: {
					filter: true,
				},
			}),
		staleTime: hrToMs(24),
	});

	const infiniteQuery = useInfiniteQuery({
		queryKey: [
			key,
			endpoint,
			type === 'parent_platforms' ? gameQuery.platformId : null,
			gameQuery.sortValue,
		],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGameInfo<GameCardData>({
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
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : null;
		},
	});

	return { infiniteQuery, query };
};

export default useGenericFetch;