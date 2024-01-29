import { useEffect } from 'react';
import useReleases from '../hooks/useReleases';
import { getFormattedDate } from '../services/formatDate';
import useGameQueryStore from '../store';
import Games from './Games';

const ThisWeekReleases = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	useEffect(() => {
		setSearchValue('');
		setSortValue('');
		setPlatformId('');
	}, []);

	const today = new Date();
	const currentDayOfTheWeek = today.getDay();
	const noOfdays = 6;

	const startOfWeek = new Date(today);
	startOfWeek.setDate(today.getDate() - currentDayOfTheWeek);

	const endOfWeek = new Date(today);
	endOfWeek.setDate(today.getDate() + (noOfdays - currentDayOfTheWeek));

	const startDate = getFormattedDate(startOfWeek);
	const endDate = getFormattedDate(endOfWeek);

	const IQueryResult = useReleases('this-week-releases', startDate, endDate);

	return (
		<Games
			heading={{
				title: 'This Week Releases',
			}}
			data={IQueryResult}
		/>
	);
};

export default ThisWeekReleases;
