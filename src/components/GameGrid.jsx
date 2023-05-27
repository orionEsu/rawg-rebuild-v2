import PropTypes from 'prop-types';
import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';
import { SimpleGrid, extendTheme } from '@chakra-ui/react';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';
import { arr } from '../data/loadingData';

const GameGrid = ({ gameQuery }) => {
	const { data: games, error, isLoading } = useGames('games', gameQuery);

	if (error) return <AlertCom msg={error} />;
	return (
		<SimpleGrid
			marginTop={5}
			columns={{ sm: 1, md: 2, lg: 3 }}
			spacing={'25px'}
		>
			{isLoading && arr.map((el) => <CardSkeleton key={el} />)}

			{games.map((game) => (
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
