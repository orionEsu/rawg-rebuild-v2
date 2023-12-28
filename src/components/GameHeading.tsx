import { Box, Heading } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import filterSpecialCharacters from '../services/filterSpecialCharacters';
import { GameHeadingProps } from '../types';
import ExpandableText from './ExpandableText';
import useGameQueryStore from '../store';
import useParentPlatform from '../hooks/useParentPlatform';

const GameHeading = ({ heading }: { heading: GameHeadingProps }) => {
	const { pathname } = useLocation();
	const { type } = useParams();
	const { data } = useParentPlatform();
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const gamePlatform = data?.results.find((el) => el.id === platformId);

	if (heading?.title)
		pathname === '/'
			? 'RAWG ▫ Discover Video Games'
			: (document.title = ` ${heading?.title && heading?.title} ▫ RAWG`);

	return (
		<>
			<Box>
				<Heading
					size={{ base: '3xl', md: '4xl' }}
					color={'gray.50'}
					mb={4}
					textTransform={'capitalize'}
					fontFamily={'orbitron'}
				>
					{pathname === '/best-of-the-year' &&
						platformId &&
						gamePlatform?.name}
					{heading?.title && type} {heading?.title}
				</Heading>
			</Box>

			<ExpandableText
				description={
					heading.description
						? filterSpecialCharacters(heading.description)
						: ' '
				}
			/>
		</>
	);
};

export default GameHeading;
