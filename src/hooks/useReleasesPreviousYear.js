import { useInfiniteQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

const previousYear = new Date().getFullYear() - 1;
const apiClient = new APIClient(
	`games/lists/greatest?year=${previousYear}&discover=true&ordering=-added&page_size=20`
);

const useReleasesPreviousYear = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	return useInfiniteQuery({
		queryKey: [
			`releases-${previousYear}`,
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

export default useReleasesPreviousYear;
