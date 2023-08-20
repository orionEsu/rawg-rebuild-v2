import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import useGameQueryStore from '../store';
import findPlatform from './useFindPlatformBySlug';
import { useEffect } from 'react';
// import { useEffect } from 'react';

// Hook to fetch games based on the selected platform and genre

const useDefinedGames = (type, slug) => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const platform = findPlatform(type);

	useEffect(() => {
		setPlatformId(platform?.id);
	}, []);

	let endpoint;
	if (!gameQuery.platformId) {
		endpoint = `genres=${slug}&platforms=${platform?.id}`;
	} else {
		endpoint = `genres=${slug}`;
	}

	const apiClient = new APIClient(`games?${endpoint}`);

	const query = useQuery({
		queryKey: `${type}-${slug}-games`,
		queryFn: () =>
			apiClient.getGames({
				params: {
					filter: true,
				},
			}),
		staleTime: hrToMs(24),
	});

	const infiniteQuery = useInfiniteQuery({
		queryKey: [
			`${type}-${slug}-games`,
			gameQuery.platformId,
			gameQuery.sortValue,
		],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getGames({
				params: {
					platforms: gameQuery?.platformId,
					filter: true,
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

	return { infiniteQuery, query };
};

export default useDefinedGames;
