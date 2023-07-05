import { useEffect } from 'react';
import GameGrid from '../components/GameGrid';
import useGames from '../hooks/useGames';
import { HStack, Box } from '@chakra-ui/react';
import SortSelector from '../components/SortSelector';
import PlatformSelector from '../components/PlatformSelector';
import GameHeading from '../components/GameHeading';
import { useLocation } from 'react-router-dom';
import useGameQueryStore from '../store';

const GamesPage = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	const { pathname } = useLocation();
	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames('', 'allGames');

	useEffect(() => {
		if (pathname === '/games') {
			setPlatformId('');
		}
	}, [pathname]);

	return (
		<>
			<GameHeading
				data={{
					seo_h1: 'All Games',
					description: '',
				}}
			/>
			<Box mt={5}>
				<HStack mb={8}>
					<SortSelector />
					<PlatformSelector />
				</HStack>
				<GameGrid
					data={data}
					error={error}
					isFetching={isFetching}
					isFetchingNextPage={isFetchingNextPage}
					fetchNextPage={fetchNextPage}
					hasNextPage={hasNextPage}
				/>
			</Box>
		</>
	);
};

export default GamesPage;
