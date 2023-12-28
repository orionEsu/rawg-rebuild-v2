import AlertCom from '../components/AlertCom';
import TypeGrid from '../components/TypeGrid';
import useParentPlatform from '../hooks/useParentPlatform';

const PlatformPage = () => {
	const { data, isLoading, error } = useParentPlatform();

	const platforms =
		data?.results
			.filter((el) => el.slug !== '3do' && el.slug !== 'neo-geo')
			?.map((el) => el.platforms.at(0))
			?.map((el) => {
				return {
					id: el?.id || 0,
					name: el?.name || '',
					slug: el?.slug || '',
					image_background: el?.image_background || '',
				};
			}) || [];

	const parentPlatforms = data?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);

	if (error instanceof Error) return <AlertCom msg={error.message} />;

	return (
		<TypeGrid
			data={platforms}
			isLoading={isLoading}
			parentPlatforms={parentPlatforms}
		/>
	);
};

export default PlatformPage;
