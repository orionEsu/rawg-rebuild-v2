import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Games from '../components/Games';
import useGames from '../hooks/useGames';
import useGameQueryStore from '../store';

const AllGamesPage = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const { pathname } = useLocation();
	
	const { infiniteQuery, query } = useGames('', 'allGames');
	const {
		data,
		error,
		isFetching,
		isInitialLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = infiniteQuery;
	const { data: title } = query;

	useEffect(() => {
		if (pathname === '/games') {
			setPlatformId('');
		}
	}, [pathname]);

	return (
		<Games
			data={{
				title,
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

export default AllGamesPage;
