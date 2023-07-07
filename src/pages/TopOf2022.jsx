import { useEffect } from 'react';
import useGameQueryStore from '../store';
import Games from '../components/Games';
import useReleases2022 from '../hooks/useReleases2022';

const TopOf2022 = () => {
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSortValue = useGameQueryStore((state) => state.setSortValue);

	useEffect(() => {
		setSortValue('');
		setPlatformId('');
	}, []);

	const {
		data,
		error,
		isInitialLoading,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useReleases2022();

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

export default TopOf2022;