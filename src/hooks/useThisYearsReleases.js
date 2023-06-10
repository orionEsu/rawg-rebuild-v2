import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';
import dateGetter from '../services/dateGetter';

const useThisYearsReleases = (gameQuery) => {
	const { year } = dateGetter();
	const start_date = `${year}-01-01`;
	const end_date = `${year}-12-31`;

	const depObj = {
		platforms: gameQuery?.selectedPlatform?.id,
		ordering: gameQuery.orderedValue,
	};

	return useQuery({
		queryKey: ['this-year-releases', depObj],
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

export default useThisYearsReleases;
