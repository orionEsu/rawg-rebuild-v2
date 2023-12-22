import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Games from '../components/Games';
import useGames from '../hooks/useGames';
import useGameQueryStore from '../store';

const AllGamesPage = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const { pathname } = useLocation();

	const { infiniteQuery, query } = useGames('', 'allGames');
	const { data: title } = query;
	const heading = { title: title?.seo_h1, description: '' };
	console.log(infiniteQuery);

	// console.log(data);
	// data?.pages.map((el) => {
	// 	el.pages.map((page) => {
	// 		console.log(page.results);
	// 		// console.log(page);
	// 	});
	// 	// console.log(el)
	// });

	useEffect(() => {
		if (pathname === '/games') {
			setPlatformId('');
		}
	}, [pathname]);

	return (
		<Games
			heading={heading}
			data={infiniteQuery}
		/>
	);
};

export default AllGamesPage;
