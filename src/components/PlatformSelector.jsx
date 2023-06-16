import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Icon,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatform';
import { iconMap } from '../data/iconMap';
import PropTypes from 'prop-types';

const PlatformSelector = ({ onSelectedPlatform, gameQuery }) => {
	const { data: platforms, error } = usePlatforms();

	const filteredPlatform = platforms?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);

	if (error) return null;

	return (
		<Menu>
			<MenuButton
				borderRadius='md'
				borderWidth='1px'
				as={Button}
				rightIcon={<BsChevronDown />}
			>
				{gameQuery?.platformId?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{filteredPlatform?.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectedPlatform(platform.id)}
					>
						<Icon
							as={iconMap[platform.slug]}
							mr={'12px'}
						/>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

PlatformSelector.propTypes = {
	onSelectedPlatform: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default PlatformSelector;
