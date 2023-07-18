import PropTypes from 'prop-types';
import useParentPlatform from '../hooks/useParentPlatform';
import useGameQueryStore from '../store';
import AlertCom from './AlertCom';
import DisplayList from './DisplayList';

const PlatformList = () => {
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	const { data: platforms, error } = useParentPlatform();

	if (error) return <AlertCom msg={error} />;

	return (
		<DisplayList
			link={'platforms'}
			heading={'Platform'}
			data={platforms}
			set={setPlatformId}
			id={platformId}
		/>
	);
};

PlatformList.propTypes = {
	onSelected: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default PlatformList;
