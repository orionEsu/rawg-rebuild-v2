import { useEffect } from 'react';
import useReleases from '../hooks/useReleases';
import useGameQueryStore from '../store';
import Games from './Games';
import { getFormattedDate } from '../services/formatDate';

const NextWeekReleases = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	useEffect(() => {
		setSearchValue('');
		setSortValue('');
		setPlatformId('');
	}, []);

	const today = new Date();
	const thisWeek = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 7
	);

	const startDate = getFormattedDate();
	const endDate = getFormattedDate(thisWeek);

	const IQueryResult = useReleases('next-week-releases', startDate, endDate);

	return (
		<Games
			heading={{
				title: 'Next Week Releases',
			}}
			data={IQueryResult}
		/>
	);
};

export default NextWeekReleases;
