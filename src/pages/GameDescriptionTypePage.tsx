import { useParams } from 'react-router-dom';
import Games from '../components/Games';
import useDefinedGames from '../hooks/useDefinedGames';

const GameDescriptionTypePage = () => {
	const { type, slug } = useParams();

	if (!type || !slug) return null;

	const { infiniteQuery, query } = useDefinedGames(type, slug);
	const { data: heading } = query;
	const IQueryResult = infiniteQuery;

	return (
		<Games
			heading={{
				title: heading?.seo_h1,
				description: heading?.description,
			}}
			data={IQueryResult}
		/>
	);
};

export default GameDescriptionTypePage;
