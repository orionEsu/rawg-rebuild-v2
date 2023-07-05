import usePlatform from './usePlatform';

const usePlatformFilter = (id) => {
	const { data: platforms } = usePlatform();
	return platforms?.results?.find((el) => el.id === id);
};

export default usePlatformFilter;
