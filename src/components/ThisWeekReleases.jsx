import { SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { arr } from '../data/loadingData';
import useThisWeekReleases from '../hooks/useThisWeekReleases';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';

const ThisWeekReleases = ({ gameQuery }) => {
	const { data, error, isLoading } = useThisWeekReleases(gameQuery);
	if (error) return <AlertCom msg={error} />;

	return (
		<SimpleGrid
			marginTop={5}
			columns={3}
			spacing={'25px'}
		>
			{isLoading && arr.map((el) => <CardSkeleton key={el} />)}

			{data?.map((game) => (
				<GameCard
					game={game}
					key={game.id}
				/>
			))}
		</SimpleGrid>
	);
};

ThisWeekReleases.propTypes = {
	gameQuery: PropTypes.object,
};
export default ThisWeekReleases;
