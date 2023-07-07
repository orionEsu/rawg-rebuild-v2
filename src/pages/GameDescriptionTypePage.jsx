import { useParams } from 'react-router-dom';
import Games from '../components/Games';
import useDefinedGames from '../hooks/useDefinedGames';

const GameDescriptionTypePage = () => {
	const { type, slug } = useParams();
	const {
		data,
		error,
		isInitialLoading,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useDefinedGames(type, slug);

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

export default GameDescriptionTypePage;
