import Games from '../components/Games';
import useReleases from '../hooks/useReleases';
import dateGetter from '../services/dateGetter';
import useGameQueryStore from '../store';
import { useEffect } from 'react';

const Last30Days = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);

	useEffect(() => {
		setSortValue('');
		setPlatformId('');
	}, []);

	const { year, month, date, startDateMonth } = dateGetter();
	const startDate = `${year}-${startDateMonth}-${date}`;
	const endDate = `${year}-${month}-${date}`;

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
