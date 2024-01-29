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
import TopOfTheYear from './pages/TopOfTheYear';
import GameDetailsPage from './pages/GameDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import GameSearch from './components/GameSearch';
import ErrorBoundary from './pages/ErrorBoundary';

const year = new Date().getFullYear() - 1;

const router = createBrowserRouter([
	{
		path: '',
		element: (
			<>
				<Layout />
				<ScrollToTop />
			</>
		),
		errorElement: <ErrorBoundary />,

		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'games',
				element: <AllGamesPage />,
			},
			{
				path: 'search',
				element: <GameSearch />,
			},
			{ path: 'games/:type/:slug', element: <GameDescriptionTypePage /> },
			{ path: 'games/:slug', element: <GameTypePage /> },
			{ path: 'games/:slug/details', element: <GameDetailsPage /> },
			{ path: 'genres', element: <GenresPage /> },
			{ path: 'platforms', element: <PlatformPage /> },
			{ path: 'last-30-days', element: <Last30Days /> },
			{ path: 'this-week', element: <ThisWeekReleases /> },
			{ path: 'next-week', element: <NextWeekReleases /> },
			{ path: 'best-of-the-year', element: <BOYReleases /> },
			{ path: `top-of-${year}`, element: <TopOfTheYear /> },
		],
	},
]);
export default router;
