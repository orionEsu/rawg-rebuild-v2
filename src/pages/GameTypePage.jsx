import { Box, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import useGenericFetch from '../hooks/useGenericFetch';
import useGameQueryStore from '../store';
import useFindPlatform from '../services/findPlatform';

const GameTypePage = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const params = useParams();
	let slug = params.slug;
	let type;

	// const selectedPlatform = findPlatform(slug);
	const selectedPlatform = useFindPlatform(slug);

	if (!selectedPlatform) type = 'genres';

	if (selectedPlatform) {
		type = 'platforms';
		slug = selectedPlatform.id;
	}

	useEffect(() => {
		if (type === 'genres' && isNaN(slug)) {
			setPlatformId('');
		}
	}, [type, slug]);

	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGenericFetch(slug, type, `${slug}Games`);

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

export default GameTypePage;
