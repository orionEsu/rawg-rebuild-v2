import { Box, HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import useDefinedGames from '../hooks/useDefinedGames';
import useGameQueryStore from '../store';

const GameDescriptionTypePage = () => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const { type, slug } = useParams();
	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useDefinedGames(type, slug);

	console.log(gameQuery.platformId);

	return (
		<>
			<GameHeading data={data?.pages?.at(0)} />
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

export default GameDescriptionTypePage;
