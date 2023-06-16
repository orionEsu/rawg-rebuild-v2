/* eslint-disable react/prop-types */
import { Card, CardHeader, HStack, Heading, Image } from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import CardIcons from './CardIcons';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import { forwardRef } from 'react';

const GameCard = forwardRef(({ game }, ref) => {
	const platformObj = game.parent_platforms.map((p) => p.platform);

	return (
		<Card
			key={game.id}
			borderRadius={10}
			overflow={'hidden'}
			ref={ref}
		>
			<Image src={getCroppedUrl(game.background_image)} />

			<CardHeader alignContent={'center'}>
				<HStack
					mb={3}
					justifyContent={'space-between'}
				>
					<HStack>
						<CardIcons platform={platformObj} />
					</HStack>
					<CriticScore score={game.metacritic} />
				</HStack>
				<HStack align={'center'}>
					<Heading fontSize={'24px'}>{game.name}</Heading>
					<Emoji rating={game.rating_top} />
				</HStack>
			</CardHeader>
		</Card>
	);
});

GameCard.displayName = 'GameCard';

export default GameCard;
