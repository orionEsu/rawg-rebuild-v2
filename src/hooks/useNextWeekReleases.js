import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';
import dateGetter from '../services/dateGetter';

const useNextWeekReleases = (gameQuery) => {
	const { year, modifiedMonth, date } = dateGetter();
	const start_date = `${year}-${modifiedMonth}-${date}`;
	const end_date = `${year}-${modifiedMonth}-${date + 7}`;

	const depObj = {
		platforms: gameQuery?.selectedPlatform?.id,
		ordering: gameQuery.orderedValue,
	};

	return useQuery({
		queryKey: ['next-week-releases', depObj],
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

export default useNextWeekReleases;
