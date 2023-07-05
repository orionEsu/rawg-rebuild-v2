import { Box, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import platforms from '../data/platforms';
import useGenericFetch from '../hooks/useGenericFetch';
import useGameQueryStore from '../store';

const findPlatform = (slug) => {
	const filteredPlatform = platforms?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);
	return filteredPlatform
		?.map((el) => el.platforms.at(0))
		.find((platform) => platform.slug === slug);
};

const GameTypePage = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const params = useParams();
	let slug = params.slug;
	let type;

	const selectedPlatform = findPlatform(slug);

	if (!selectedPlatform) type = 'genres';

	if (selectedPlatform) {
		type = 'platforms';
		slug = selectedPlatform.id;
	}

	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGenericFetch(slug, type, `${slug}Games`);

	useEffect(() => {
		if (type !== 'platforms' && data) {
			setPlatformId('');
		}
	}, [type]);

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
