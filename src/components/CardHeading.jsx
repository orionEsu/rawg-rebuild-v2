import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatform';
import HeadingEl from './Heading';
import PropTypes from 'prop-types';

const CardHeading = ({ gameQuery }) => {
	const { data: genres } = useGenres();
	const genre = genres?.results?.find((el) => el.id === gameQuery.genreId);

	const { data: platforms } = usePlatforms();
	const platform = platforms?.results?.find(
		(el) => el.id === gameQuery.platformId
	);

	if (gameQuery.lastestRelease) return <HeadingEl msg={'Last 30 Days'} />;
	if (gameQuery.thisWeek) return <HeadingEl msg={'This Week'} />;
	if (gameQuery.nextWeek) return <HeadingEl msg={'Next Week'} />;
	if (gameQuery.allYear) return <HeadingEl msg={'Best of the year'} />;

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
