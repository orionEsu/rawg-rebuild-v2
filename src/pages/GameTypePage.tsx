import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlertCom from '../components/AlertCom';
import Games from '../components/Games';
import useFindPlatformBySlug from '../hooks/useFindPlatformBySlug';
import useGenericFetch from '../hooks/useGenericFetch';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';

const GameTypePage = () => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const setGenreId = useGameQueryStore((state) => state.setGenreId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);
	const { data } = useGenres();

	const params = useParams();
	let slug = params.slug;
	let type: string = '';

	if (!slug) return <AlertCom msg='An Error Occured' />;

	const selectedPlatform = useFindPlatformBySlug(slug);
	const filteredGenre = data?.results.filter((el) => el.slug === slug);

	if (!selectedPlatform) type = 'genres';

	if (!selectedPlatform && !gameQuery.genreId) {
		filteredGenre.length > 0 && setGenreId(filteredGenre?.[0].id);
	}

	if (selectedPlatform) {
		type = 'parent_platforms';
		slug = selectedPlatform.id.toString();
	}

	const { infiniteQuery, query } = useGenericFetch(
		slug,
		type,
		`${slug}Games`
	);
	const IQueryResult = infiniteQuery;
	const { data: heading } = query;

	useEffect(() => {
		setSearchValue('');
		if (IQueryResult.data) {
			setSortValue('');
			if (type === 'genres') {
				setPlatformId('');
			}

			if (type !== 'genres') {
				setGenreId('');
			}
		}
	}, [type, slug, setPlatformId, setGenreId, setSortValue]);

	return (
		<Games
			heading={{
				title: heading?.seo_h1,
				description: heading?.description,
			}}
			data={IQueryResult}
		/>
	);
};

export default GameTypePage;
