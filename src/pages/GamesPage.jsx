import GameGrid from '../components/GameGrid';
import useGames from '../hooks/useGames';
import { HStack, Box } from '@chakra-ui/react';
import SortSelector from '../components/SortSelector';
import PlatformSelector from '../components/PlatformSelector';

const GamesPage = () => {
	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames('', 'allGames');
	return (
		<>
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
