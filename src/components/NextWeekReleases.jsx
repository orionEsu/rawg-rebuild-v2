import { useEffect } from 'react';
import useReleases from '../hooks/useReleases';
import dateGetter from '../services/dateGetter';
import padNum from '../services/padNum';
import useGameQueryStore from '../store';
import Games from './Games';

const NextWeekReleases = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);

	useEffect(() => {
		setSortValue('');
		setPlatformId('');
	}, []);

	const { today, year, month, date } = dateGetter();
	const updatedDate = padNum(today.getDate() + 7, 0);
	const startDate = `${year}-${month}-${date}`;
	const endDate = `${year}-${month}-${updatedDate}`;

	const {
		data,
		error,
		isInitialLoading,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useReleases('next-week-releases', startDate, endDate);

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

export default NextWeekReleases;
