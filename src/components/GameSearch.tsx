import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useGames from '../hooks/useGames';
import useGameQueryStore from '../store';
import Games from './Games';

const GameSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);
	const query = searchParams.get('query');
	const navigate = useNavigate();

	useEffect(() => {
		if (!query) {
			navigate('/', { replace: true });
		}
	}, []);

	useEffect(() => {
		// Only set the 'searchValue' if it's not equal to the value from the URL query parameter
		if (query !== gameQuery.searchValue) {
			setSearchValue(query);
		}
	}, [query, gameQuery.searchValue, setSearchValue]);

	const {
		infiniteQuery: {
			data,
			error,
			isInitialLoading,
			isFetching,
			isFetchingNextPage,
			fetchNextPage,
			hasNextPage,
		},
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
