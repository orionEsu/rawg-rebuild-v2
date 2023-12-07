import { useEffect } from 'react';
import useGameQueryStore from '../store';
import Games from '../components/Games';
import useReleasesPreviousYear from '../hooks/useReleasesPreviousYear';

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
	} = useReleasesPreviousYear();

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