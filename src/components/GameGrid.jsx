import PropTypes from 'prop-types';
import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';
import { SimpleGrid } from '@chakra-ui/react';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';
import { arr } from '../data/loadingData';

const GameGrid = ({ gameQuery }) => {
	const { data: games, error, isLoading } = useGames('games', gameQuery);

	// return null;
	if (error) return <AlertCom msg={error} />;
	return (
		<SimpleGrid
			marginTop={5}
			columns={3}
			spacing={'25px'}
		>
			{isLoading && arr.map((el) => <CardSkeleton key={el} />)}

			{!gameQuery.lastestRelease &&
				!gameQuery.thisWeek &&
				!gameQuery.nextWeek &&
				!gameQuery.allYear &&
				games.map((game) => (
					<GameCard
						game={game}
						key={game.id}
					/>
				))}
		</SimpleGrid>
	);
};

GameGrid.propTypes = {
	gameQuery: PropTypes.object,
};

export default GameGrid;
