import Games from '../components/Games';
import useGames from '../hooks/useGames';

const HomePage = () => {
	document.title = ' RAWG ▫ Discover Video Games';

	const { infiniteQuery, query } = useGames(
		'/lists/main?discover=true&ordering=-relevance',
		'newGames'
	);
	const { data: title } = query;
	const heading = { title: title?.seo_h1, description: '' };

	return (
		<Games
			heading={heading}
			data={infiniteQuery}
		/>
	);
};

export default HomePage;
