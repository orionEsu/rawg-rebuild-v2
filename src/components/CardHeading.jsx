import PropTypes from 'prop-types';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';
import HeadingEl from './Heading';

const CardHeading = () => {
	const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
	const genre = useGenre(genreId);

	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const platform = usePlatform(platformId);

	// if (gameQuery.lastestRelease) return <HeadingEl msg={'Last 30 Days'} />;
	// if (gameQuery.thisWeek) return <HeadingEl msg={'This Week'} />;
	// if (gameQuery.nextWeek) return <HeadingEl msg={'Next Week'} />;
	// if (gameQuery.allYear) return <HeadingEl msg={'Best of the year'} />;

	return (
		<HeadingEl
			msg={platform?.name}
			msg2={genre?.name}
			msg3={'Games'}
		/>
	);
};

CardHeading.propTypes = {
	gameQuery: PropTypes.object,
};
export default CardHeading;
