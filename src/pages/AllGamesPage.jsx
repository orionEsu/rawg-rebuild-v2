import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Games from '../components/Games';
import useGames from '../hooks/useGames';
import useGameQueryStore from '../store';

const AllGamesPage = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	const { pathname } = useLocation();
	const {
		data,
		error,
		isFetching,
		isInitialLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames('', 'allGames');

	useEffect(() => {
		if (pathname === '/games') {
			setPlatformId('');
		}
	}, [pathname]);

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

export default AllGamesPage;
