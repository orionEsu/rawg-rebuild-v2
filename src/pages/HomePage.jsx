import Games from '../components/Games';
import useGames from '../hooks/useGames';

const HomePage = () => {
	const { infiniteQuery, query } = useGames(
		'/lists/main?discover=true&ordering=-relevance',
		'newGames'
	);
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

export default HomePage;
