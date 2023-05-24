import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';

const GameGrid = ({ onSelected, onPlatform }) => {
	const { data: games, error, isLoading } = useGames(onSelected, onPlatform);

	const arr = [1, 2, 3, 4, 5, 6, 7, 8];

	if (error) return <AlertCom msg={error} />;

	return (
		<SimpleGrid
			marginTop={5}
			columns={3}
			spacing={'25px'}
		>
			{isLoading && arr.map((el) => <CardSkeleton key={el} />)}
			{games.length !== 0 ? (
				games.map((game) => (
					<GameCard
						game={game}
						key={game.id}
					/>
				))
			) : (
				<AlertCom msg={'No Games in this platform'} />
			)}
		</SimpleGrid>
	);
};

GameGrid.propTypes = {
	onSelected: PropTypes.object,
	onPlatform: PropTypes.object,
};

export default GameGrid;
