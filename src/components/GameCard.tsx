import {
	Card,
	CardHeader,
	HStack,
	Heading,
	Image,
	Box,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import getCroppedUrl from '../services/image-url';
import CardIcons from './CardIcons';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';
import { GameCardProps } from '../types';

const GameCard = forwardRef<HTMLDivElement, { game: GameCardProps }>(
	({ game }, ref) => {
		const platformObj = game?.parent_platforms?.map((p) => p.platform);

		return (
			<Link to={`/games/${game.slug}/details`}>
				<Card
					borderRadius={10}
					overflow={'hidden'}
					ref={ref}
					boxShadow={'0 10px 20px 0 rgba(0,0,0,.07)'}
					transition={'transform .2s ease'}
					_hover={{
						boxShadow: '0 10px 20px 0 rgba(0,0,0,.07)',
						transform: 'translateY(-5px)',
					}}
					cursor={'pointer'}
					height={'100%'}
				>
					<Image
						src={getCroppedUrl(game.background_image)}
						aspectRatio={'auto'}
						alt={game.name}
					/>

					<CardHeader alignContent={'center'}>
						<HStack
							mb={3}
							justifyContent={'space-between'}
							gap={'1rem'}
						>
							<HStack
								gap={'.6rem'}
								wrap={'wrap'}
							>
								<CardIcons platform={platformObj} />
							</HStack>
							<CriticScore score={game.metacritic} />
						</HStack>

						<Box>
							<Heading
								fontSize={'24px'}
								color={'gray.50'}
								marginRight={'auto'}
								display={'inline-block'}
							>
								{game.name}
								{'  '}
								<Emoji rating={game.rating_top} />
							</Heading>
						</Box>
					</CardHeader>
				</Card>
			</Link>
		);
	}
);

GameCard.displayName = 'GameCard';

export default GameCard;
