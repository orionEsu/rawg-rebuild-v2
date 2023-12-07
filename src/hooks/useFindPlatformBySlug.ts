import useParentPlatform from './useParentPlatform';

export default (slug) => {
	const { data } = useParentPlatform();
	return data?.results.find((platform) => platform.slug === slug);
};
