import Games from '../components/Games';
import useGames from '../hooks/useGames';

const HomePage = () => {
	document.title = ' RAWG ▫ Discover Video Games';

	const { infiniteQuery } = useGames(
		'/lists/main?discover=true&ordering=-relevance',
		'newGames'
	);
	
	return (
		<Games
			heading={
				{
					title: 'New and trending',
					description: 'Based on player counts and release date',
				}
			}
			data={infiniteQuery}
		/>
	);
};

export default HomePage;
