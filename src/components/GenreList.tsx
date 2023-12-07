/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';
import AlertCom from './AlertCom';
import DisplayList from './DisplayList';

const GenreList = ({ onClose }) => {
	const { data: genres, error } = useGenres();

	if (error) return <AlertCom msg={error} />;

	return (
		<DisplayList
			link={'genres'}
			heading={'Genres'}
			data={genres}
			onClose={onClose}
		/>
	);
};

GenreList.propTypes = {
	onSelected: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default GenreList;
