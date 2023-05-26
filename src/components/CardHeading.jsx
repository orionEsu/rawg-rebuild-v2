import HeadingEl from './Heading';
import PropTypes from 'prop-types';

const CardHeading = ({ gameQuery }) => {
	if (gameQuery.lastestRelease) return <HeadingEl msg={'Last 30 Days'} />;
	if (gameQuery.thisWeek) return <HeadingEl msg={'This Week'} />;
	if (gameQuery.nextWeek) return <HeadingEl msg={'Next Week'} />;
	if (gameQuery.allYear) return <HeadingEl msg={'Best of the year'} />;

	return (
		<HeadingEl
			msg={gameQuery?.selectedPlatform?.name}
			msg2={gameQuery?.selected?.name}
			msg3={'Games'}
		/>
	);
};

CardHeading.propTypes = {
	gameQuery: PropTypes.object,
};
export default CardHeading;
