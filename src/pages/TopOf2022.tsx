import { useEffect } from 'react';
import useGameQueryStore from '../store';
import Games from '../components/Games';
import useReleasesPreviousYear from '../hooks/useReleasesPreviousYear';

const TopOf2022 = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const year = new Date().getFullYear();

	useEffect(() => {
		setSortValue('');
		setPlatformId('');
	}, []);

	const IQueryResult = useReleasesPreviousYear();

	return (
		<Games
			heading={{
				title: `Popular in ${year - 1}`,
			}}
			data={IQueryResult}
		/>
	);
};

export default TopOf2022;