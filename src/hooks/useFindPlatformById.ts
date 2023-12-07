import useParentPlatform from './useParentPlatform';

export default (id) => {
	const { data: platforms } = useParentPlatform();
	return platforms?.results?.find((el) => el.id === id);
};
