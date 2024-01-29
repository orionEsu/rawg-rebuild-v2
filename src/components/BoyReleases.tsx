import { useEffect } from 'react';
import useReleases from '../hooks/useReleases';
import useGameQueryStore from '../store';
import Games from './Games';

const BOYReleases = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	useEffect(() => {
		setSortValue('');
		setPlatformId('');
		setSearchValue('');
	}, []);

	const year = new Date().getFullYear();
	const startDate = `${year}-01-01`;
	const endDate = `${year}-12-31`;

	const IQueryResult = useReleases('this-year-releases', startDate, endDate);

	return (
		<Games
			heading={{ title: `Games of ${year}` }}
			data={IQueryResult}
		/>
	);
};

export default BOYReleases;
