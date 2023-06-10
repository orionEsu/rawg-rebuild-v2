import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';

const useThisYearsReleases = (gameQuery) => {
	const depObj = {
		platforms: gameQuery?.selectedPlatform?.id,
		ordering: gameQuery.orderedValue,
	};

	return useQuery({
		queryKey: ['this-year-releases', depObj],
		queryFn: async () => {
			const res = await instance.get(
				'games/lists/greatest?discover=true',
				{
					...depObj,
				}
			);
			return res.data.results;
		},
		staleTime: hrToMs(24),
	});
};

export default useThisYearsReleases;
