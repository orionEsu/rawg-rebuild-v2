/* eslint-disable react/prop-types */
import { Card, CardHeader, HStack, Heading, Image } from '@chakra-ui/react';
import { forwardRef } from 'react';
import getCroppedUrl from '../services/image-url';
import CardIcons from './CardIcons';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

const GameCard = forwardRef(({ game }, ref) => {
	const platformObj = game?.parent_platforms?.map((p) => p.platform);

	return (
		<Card
			borderRadius={10}
			overflow={'hidden'}
			ref={ref}
			boxShadow={'0 10px 20px 0 rgba(0,0,0,.07)'}
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

				<Link to={`/games/${game.slug}/details`}>
					<Heading
						fontSize={'24px'}
						color={'gray.50'}
					>
						{game.name}
						<Emoji rating={game.rating_top} />
					</Heading>
				</Link>
			</CardHeader>
		</Card>
	);
});

GameCard.displayName = 'GameCard';

export default GameCard;
