import { Card, CardBody, CardHeader, Heading, Image } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';
import getCroppedUrl from '../services/image-url';

const GameCard = () => {
	const { data: games, error, isLoading } = useGames('games');

	if (error) return <AlertCom msg={error} />;

	return games.map((game) => (
		<Card
			key={game.id}
			borderRadius={10}
			overflow={'hidden'}
		>
			<Image src={getCroppedUrl(game.background_image)} />
			<CardHeader>
				<Heading
					size={'lg'}
					px={2}
					py={5}
				>
					{game.name}
				</Heading>
			</CardHeader>
		</Card>
	));
};

export default GameCard;
