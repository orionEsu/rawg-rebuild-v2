/* eslint-disable react-hooks/exhaustive-deps */
import {
	Button,
	Box,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { iconMap } from '../data/iconMap';
import useParentPlatform from '../hooks/useParentPlatform';
import useGameQueryStore from '../store';
import usePlatformFilter from '../hooks/usePlatformFilter';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PlatformSelector = () => {
	const { data, error } = useParentPlatform();
	const filteredPlatform = data?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);
	const sortedPlatforms = filteredPlatform?.map((el) => el.platforms.at(0));

	const [extended, setExtended] = useState();
	const { slug } = useParams();

	const find = sortedPlatforms.find((platform) => platform.slug === slug);
	useEffect(() => {
		if (!find) setExtended(true);
		if (find || !slug) setExtended(false);
	}, [find]);

	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	const selectedPlatform = usePlatformFilter(platformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton
				borderRadius='md'
				borderWidth='1px'
				as={Button}
				rightIcon={<BsChevronDown />}
			>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{sortedPlatforms?.map((platform) => (
					<Box key={platform.id}>
						<Link
							to={
								extended
									? `/games/${platform.slug}/${slug}`
									: `/games/${platform.slug}`
							}
						>
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
						</Link>
					</Box>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
