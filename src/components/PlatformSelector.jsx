import {
	Button,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { iconMap } from '../data/iconMap';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

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
				{platformId?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{filteredPlatform?.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => setPlatformId(platform.id)}
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

export default PlatformSelector;
