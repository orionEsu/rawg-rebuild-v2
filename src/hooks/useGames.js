import useData from './useData';

const useGames = (path, gameQuery) =>
	useData(
		path,
		{
			params: {
				genres: gameQuery?.selected?.id,
				platforms: gameQuery?.selectedPlatform?.id,
				ordering: gameQuery.orderedValue,
			},
		},
		[gameQuery]
	);

export default useGames;
