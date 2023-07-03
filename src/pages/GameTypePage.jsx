import { useParams } from 'react-router-dom';
import useGenericFetch from '../hooks/useGenericFetch';
import GameGrid from '../components/GameGrid';
import { HStack, Box } from '@chakra-ui/react';
import SortSelector from '../components/SortSelector';
import PlatformSelector from '../components/PlatformSelector';
import GameHeading from '../components/GameHeading';
import platforms from '../data/platforms';

const GameTypePage = () => {
	const params = useParams();
	let slug = params.slug;

	let type;
	const find = platforms.results.find((platform) => platform.slug === slug);
	if (!find) type = 'genres';

	if (find) {
		type = 'parent_platforms';
		slug = find.id;
	}

	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGenericFetch(slug, type, `${slug}Games`);

	const description = data?.pages?.at(0).description.slice(3, -4);
	const heading = data?.pages?.at(0).seo_h1;

	return (
		<>
			<GameHeading
				heading={heading}
				description={description}
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

export default GameTypePage;
