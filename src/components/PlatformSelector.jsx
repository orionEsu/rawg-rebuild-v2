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
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import findPlatformById from '../hooks/useFindPlatformById';
import findPlatformBySlug from '../hooks/useFindPlatformBySlug';

const PlatformSelector = () => {
	const { data, error } = useParentPlatform();
	const [extended, setExtended] = useState();
	const { slug } = useParams();
	const { pathname } = useLocation();
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	const find = findPlatformBySlug(slug);
	useEffect(() => {
		if (!find) setExtended(true);
		if (find || !slug) {
			setExtended(false);
			setPlatformId(find?.id);
		}
	}, [find]);

	const selectedPlatform = findPlatformById(platformId);
	if (error) return null;

	return (
		<Menu>
			<MenuButton
				borderRadius='md'
				as={Button}
				rightIcon={<BsChevronDown />}
				fontWeight={'400'}
			>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data?.results
					.filter((el) => el.slug !== '3do' && el.slug !== 'neo-geo')
					.map((platform) => (
						<Box key={platform.id}>
							{pathname !== '/last-30-days' &&
							pathname !== '/this-week' &&
							pathname !== '/next-week' &&
							pathname !== '/best-of-the-year' &&
							pathname !== '/top-of-2022' ? (
								<Link
									to={
										extended
											? `/games/${platform.slug}/${slug}`
											: `/games/${platform.slug}`
									}
								>
									<MenuItem
										key={platform.id}
										onClick={() =>
											setPlatformId(platform.id)
										}
									>
										<Icon
											as={iconMap[platform.slug]}
											mr={'12px'}
										/>
										{platform.name}
									</MenuItem>
								</Link>
							) : (
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
							)}
						</Box>
					))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
