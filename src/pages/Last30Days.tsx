import { useEffect } from 'react';
import Games from '../components/Games';
import useReleases from '../hooks/useReleases';
import { getFormattedDate } from '../services/formatDate';
import useGameQueryStore from '../store';

const Last30Days = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	useEffect(() => {
		setSearchValue('');
		setSortValue('');
		setPlatformId('');
	}, []);

	const today = new Date();
	const last30DaysStart = new Date(
		today.getTime() - 30 * 24 * 60 * 60 * 1000
	);

	const startDate = getFormattedDate(last30DaysStart);
	const endDate = getFormattedDate();
	
	const IQueryResult = useReleases('last-30-days', startDate, endDate);

	return (
		<Games
			heading={{
				title: 'Last 30 Days Releases',
			}}
			data={IQueryResult}
		/>
	);
};

export default Last30Days;
