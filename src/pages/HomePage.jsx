import GameGrid from '../components/GameGrid';
import useGames from '../hooks/useGames';
import SortSelector from '../components/SortSelector';
import { HStack, Box } from '@chakra-ui/react';

const HomePage = () => {
	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames('/lists/main?discover=true&ordering=-relevance', 'newGames');

	return (
		<>
			<Box mt={5}>
				<HStack mb={8}>
					<SortSelector />
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

export default HomePage;
