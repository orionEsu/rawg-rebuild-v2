import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AllGamesPage from './pages/AllGamesPage';
import GenresPage from './pages/GenresPage';
import PlatformPage from './pages/PlatformPage';
import GameTypePage from './pages/GameTypePage';
import GameDescriptionTypePage from './pages/GameDescriptionTypePage';
import Last30Days from './pages/Last30Days';
import ThisWeekReleases from './components/ThisWeekReleases';
import NextWeekReleases from './components/NextWeekReleases';
import BOYReleases from './components/BoyReleases';
import TopOf2022 from './pages/TopOf2022';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'games',
				element: <AllGamesPage />,
			},
			{ path: 'games/:type/:slug', element: <GameDescriptionTypePage /> },
			{ path: 'games/:slug', element: <GameTypePage /> },
			{ path: 'genres', element: <GenresPage /> },
			{ path: 'platforms', element: <PlatformPage /> },
			{ path: 'last-30-days', element: <Last30Days /> },
			{ path: 'this-week', element: <ThisWeekReleases /> },
			{ path: 'next-week', element: <NextWeekReleases /> },
			{ path: 'best-of-the-year', element: <BOYReleases /> },
			{ path: 'top-of-2022', element: <TopOf2022 /> },
		],
	},
]);
export default router;
