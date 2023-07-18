import { useEffect } from 'react';
import useReleases from '../hooks/useReleases';
import dateGetter from '../services/dateGetter';
import padNum from '../services/padNum';
import useGameQueryStore from '../store';
import Games from './Games';

const ThisWeekReleases = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	
	useEffect(() => {
		setSortValue('');
		setPlatformId('');
	}, []);


	const { today, year, month, day } = dateGetter();

	const val = today.getDate() - day + (day === 0 ? -6 : 1);
	const diffMonday = padNum(val, val + 6);
	const diffSunday = padNum(val, val + 6);
	const startDate = `${year}-${month}-${diffMonday}`;
	const endDate = `${year}-${month}-${diffSunday}`;


	const {
		data,
		error,
		isInitialLoading,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useReleases('this-week-releases', startDate, endDate);

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

export default ThisWeekReleases;
