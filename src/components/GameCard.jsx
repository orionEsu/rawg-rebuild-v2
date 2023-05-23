import { Card, CardHeader, Heading, Image } from '@chakra-ui/react';
import AlertCom from './AlertCom';
import getCroppedUrl from '../services/image-url';
import PropTypes from 'prop-types';
import useGames from '../hooks/useGames';
import CardSkeleton from './CardSkeleton';

const GameCard = ({ onSelected }) => {
	const { data: games, error, isLoading } = useGames(onSelected);
	const arr = [1, 2, 3, 4, 5, 6, 7, 8];

	if (error) return <AlertCom msg={error} />;

	return (
		<>
			{isLoading && arr.map((el) => <CardSkeleton key={el.id} />)}

			{games.map((game) => (
				<Card
					key={game.id}
					borderRadius={10}
					overflow={'hidden'}
				>
					<Image src={getCroppedUrl(game.background_image)} />
					<CardHeader>
						<Heading
							fontSize={'24px'}
							px={2}
							py={5}
						>
							{game.name}
						</Heading>
					</CardHeader>
				</Card>
			))}
		</>
	);
};

GameCard.propTypes = {
	onSelected: PropTypes.object,
};

export default GameCard;
