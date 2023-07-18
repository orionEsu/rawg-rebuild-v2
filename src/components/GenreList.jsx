import PropTypes from 'prop-types';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';
import AlertCom from './AlertCom';
import DisplayList from './DisplayList';

const GenreList = () => {
	const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
	const setGenreId = useGameQueryStore((state) => state.setGenreId);
	const { data: genres, error } = useGenres();

	if (error) return <AlertCom msg={error} />;

	return (
		<DisplayList
			link={'genres'}
			heading={'Genres'}
			data={genres}
			set={setGenreId}
			id={genreId}
		/>
	);
};

GenreList.propTypes = {
	onSelected: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default GenreList;
