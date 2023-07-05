import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import GenresPage from './pages/GenresPage';
import PlatformPage from './pages/PlatformPage';
import GameTypePage from './pages/GameTypePage';
import GameDescriptionTypePage from './pages/GameDescriptionTypePage';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'games',
				element: <GamesPage />,
			},
			{ path: 'games/:type/:slug', element: <GameDescriptionTypePage /> },
			{ path: 'games/:slug', element: <GameTypePage /> },
			{ path: 'genres', element: <GenresPage /> },
			{ path: 'platforms', element: <PlatformPage /> },
		],
	},
]);
export default router;
