import { useEffect } from 'react';
import Games from '../components/Games';
import useReleasesPreviousYear from '../hooks/useReleasesPreviousYear';
import useGameQueryStore from '../store';

const TopOfTheYear = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	const year = new Date().getFullYear();
	
	useEffect(() => {
		setSortValue('');
		setPlatformId('');
		setSearchValue('');
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

export default TopOfTheYear;