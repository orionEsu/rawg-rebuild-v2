import { useParams } from 'react-router-dom';
import Games from '../components/Games';
import useDefinedGames from '../hooks/useDefinedGames';
const GameDescriptionTypePage = () => {
	const { type, slug } = useParams();
	
	const { infiniteQuery, query } = useDefinedGames(type, slug);
	const { data: title } = query;
	const {
		data,
		error,
		isFetching,
		isInitialLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = infiniteQuery;

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

export default GameDescriptionTypePage;
