import { useEffect } from 'react';
import useReleases from '../hooks/useReleases';
import dateGetter from '../services/dateGetter';
import useGameQueryStore from '../store';
import Games from './Games';

const BOYReleases = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);

	useEffect(() => {
		setSortValue('');
		setPlatformId('');
	}, []);

	const { year } = dateGetter();
	const startDate = `${year}-01-01`;
	const endDate = `${year}-12-31`;

	const {
		data,
		error,
		isInitialLoading,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useReleases('this-year-releases', startDate, endDate);

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

export default BOYReleases;
