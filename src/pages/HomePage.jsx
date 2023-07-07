import Games from '../components/Games';
import useGames from '../hooks/useGames';

const HomePage = () => {
	const {
		data,
		error,
		isInitialLoading,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames('/lists/main?discover=true&ordering=-relevance', 'newGames');

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

export default HomePage;
