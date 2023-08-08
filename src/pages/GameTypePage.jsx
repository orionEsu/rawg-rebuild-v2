import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Games from '../components/Games';
import useGenericFetch from '../hooks/useGenericFetch';
import useFindPlatformBySlug from '../hooks/useFindPlatformBySlug';
import genres from '../data/genres';
import useGameQueryStore from '../store';

const GameTypePage = () => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const setGenreId = useGameQueryStore((state) => state.setGenreId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const params = useParams();
	let slug = params.slug;
	let type;

	const selectedPlatform = useFindPlatformBySlug(slug);
	const filteredGenre = genres?.results.filter((el) => el.slug === slug);

	if (!selectedPlatform) type = 'genres';

	if (!selectedPlatform && !gameQuery.genreId) {
		setGenreId(filteredGenre?.[0].id);
	}

	if (selectedPlatform) {
		type = 'parent_platforms';
		slug = selectedPlatform.id;
	}

	const {
		data,
		error,
		isFetching,
		isInitialLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGenericFetch(slug, type, `${slug}Games`);
	useEffect(() => {
		if (data) {
			setSortValue('');

			if (type === 'genres' && isNaN(slug)) {
				setPlatformId('');
			}

			if (type !== 'genres') {
				setGenreId('');
			}
		}
	}, [type, slug]);

	return (
		<Games
			data={{
				data,
				error,
				isInitialLoading,
				isFetching,
				isFetchingNextPage,
				fetchNextPage,
				hasNextPage,
			}}
		/>
	);
};

export default GameTypePage;
