import AlertCom from '../components/AlertCom';
import TypeGrid from '../components/TypeGrid';
import useGenres from '../hooks/useGenres';
const GenresPage = () => {
	const { data: genres, isLoading, error } = useGenres();
	if (error) return <AlertCom msg={error.message} />;

	return (
		<TypeGrid
			data={genres.results}
			isLoading={isLoading}
		/>
	);
};

export default GenresPage;
