import useParentPlatform from './useParentPlatform';

export default (slug: string) => {
	const { data } = useParentPlatform();
	return data?.results.find((platform) => platform.slug === slug);
};
