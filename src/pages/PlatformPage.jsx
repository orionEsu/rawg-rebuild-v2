import AlertCom from '../components/AlertCom';
import TypeGrid from '../components/TypeGrid';
import useParentPlatform from '../hooks/useParentPlatform';
import filteredPlatform from '../services/filteredPlatforms';

const PlatformPage = () => {
	const { data, isLoading, error } = useParentPlatform();
	const platforms = filteredPlatform(data);
	const parentPlatforms = data?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);

	if (error) return <AlertCom msg={error.message} />;

	return (
		<TypeGrid
			data={platforms}
			isLoading={isLoading}
			parentPlatforms={parentPlatforms}
		/>
	);
};

export default PlatformPage;
