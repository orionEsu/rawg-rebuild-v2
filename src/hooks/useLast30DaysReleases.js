import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';
import dateGetter from '../services/dateGetter';

const useLast30DaysReleases = (gameQuery) => {
	const { year, modifiedMonth, lastDayOfTheMonth } = dateGetter();
	const start_date = `${year}-${modifiedMonth}-01`;
	const end_date = `${year}-${modifiedMonth}-${lastDayOfTheMonth}`;

	const depObj = {
		platforms: gameQuery?.platformId,
		ordering: gameQuery?.orderedValue,
	};
	// 'games/lists/recent-games-past?discover=true',

	return useQuery({
		queryKey: ['last30days-releases', depObj],
		queryFn: async () => {
			const res = await instance.get('games', {
				params: {
					dates: `${start_date},${end_date}`,
					...depObj,
				},
			});
			return res.data.results;
		},
		staleTime: hrToMs(24),
	});
};

export default useLast30DaysReleases;
