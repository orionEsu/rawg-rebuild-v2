import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';

const useNextWeekReleases = (gameQuery) => {
	const depObj = {
		platforms: gameQuery?.selectedPlatform?.id,
		ordering: gameQuery.orderedValue,
	};

	return useQuery({
		queryKey: ['next-week-releases', depObj],
		queryFn: async () => {
			const res = await instance.get(
				'games/lists/recent-games-future?discover=true',
				{
					...depObj,
				}
			);
			return res.data.results;
		},
		staleTime: hrToMs(24),
	});
};

export default useNextWeekReleases;
