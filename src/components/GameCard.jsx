import { Card, CardHeader, HStack, Heading, Image } from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import PropTypes from 'prop-types';
import CardIcons from './CardIcons';

const GameCard = ({ game }) => {
	const platformObj = game.parent_platforms.map((p) => p.platform);

	return (
		<Card
			key={game.id}
			borderRadius={10}
			overflow={'hidden'}
		>
			<Image src={getCroppedUrl(game.background_image)} />

			<CardHeader alignContent={'center'}>
				<HStack mb={3}>
					<CardIcons platform={platformObj} />
				</HStack>
				<Heading
					fontSize={'24px'}
				>
					{game.name}
				</Heading>
			</CardHeader>
		</Card>
	);
};

GameCard.propTypes = {
	game: PropTypes.object,
};

export default GameCard;
