import { SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { arr } from '../data/loadingData';
import useLast30DaysReleases from '../hooks/useLast30DaysReleases';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';

const LatestRelease = ({ gameQuery }) => {
	const { data, error, isLoading } = useLast30DaysReleases(gameQuery);

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

LatestRelease.propTypes = {
	gameQuery: PropTypes.object,
};
export default LatestRelease;
