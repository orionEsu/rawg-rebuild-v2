import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';

const GameGrid = ({ onSelected }) => {
	const { data: games, error, isLoading } = useGames(onSelected);

	const arr = [1, 2, 3, 4, 5, 6, 7, 8];

	if (error) return <AlertCom msg={error} />;

	return (
		<SimpleGrid
			columns={3}
			spacing={'25px'}
			paddingX={'10'}
		>
			{isLoading && arr.map((el) => <CardSkeleton key={el} />)}
			{games.map((game) => (
				<GameCard game={game} key={game.id}/>
			))}
		</SimpleGrid>
	);
};

GameGrid.propTypes = {
	onSelected: PropTypes.object,
};

export default GameGrid;
