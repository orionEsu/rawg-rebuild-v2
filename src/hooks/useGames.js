import { useQuery } from '@tanstack/react-query';
import instance from '../services/url-client';
import { hrToMs } from '../services/timeConverter';

const useGames = (gameQuery) =>
	useQuery({
		queryKey: ['games', gameQuery],
		queryFn: async () => {
			const res = await instance.get('games', {
				params: {
					genres: gameQuery?.selected?.id,
					platforms: gameQuery?.selectedPlatform?.id,
					ordering: gameQuery.orderedValue,
					search: gameQuery?.searchValue,
				},
			});
			return res.data.results;
		},
		staleTime: hrToMs(24),
	});

export default useGames;
