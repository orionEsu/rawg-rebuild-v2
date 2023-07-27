import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGameQueryStore from '../store';
import useGames from '../hooks/useGames';
import Games from './Games';

const GameSearch = () => {
	const { query } = useParams();
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	useEffect(() => {
		// Only set the 'searchValue' if it's not equal to the value from the URL query parameter
		if (query !== gameQuery.searchValue) {
			setSearchValue(query);
		}
	}, [query, gameQuery.searchValue, setSearchValue]);

	const {
		data,
		error,
		isFetching,
		isInitialLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames('', 'allGames');

	return (
		<Games
			data={{
				data,
				error,
				isInitialLoading,
				isFetching,
				isFetchingNextPage,
				fetchNextPage,
				hasNextPage,
			}}
		/>
	);
};

export default GameSearch;
