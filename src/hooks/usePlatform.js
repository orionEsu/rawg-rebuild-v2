import usePlatforms from './usePlatforms';

const usePlatform = (platformId) => {
	const { data: platforms } = usePlatforms();
	return platforms?.results?.find((el) => el.id === platformId);
};

export default usePlatform;
