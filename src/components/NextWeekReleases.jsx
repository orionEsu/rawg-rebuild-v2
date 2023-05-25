import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';
import { arr } from '../data/loadingData';
import { SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NextWeekReleases = ({ gameQuery }) => {
	const { data, error, isLoading } = useGames(
		'games/lists/recent-games-future?discover=true',
		gameQuery
	);
	// console.log(data);
	if (error) return <AlertCom msg={error} />;

	return (
		<SimpleGrid
			marginTop={5}
			columns={3}
			spacing={'25px'}
		>
			{isLoading && arr.map((el) => <CardSkeleton key={el} />)}

			{data &&
				data.map((game) => (
					<GameCard
						game={game}
						key={game.id}
					/>
				))}
		</SimpleGrid>
	);
};

NextWeekReleases.propTypes = {
	gameQuery: PropTypes.object,
};
export default NextWeekReleases;
