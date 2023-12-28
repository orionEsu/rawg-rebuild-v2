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
import AlertCom from './AlertCom';

const PlatformSelector = () => {
	const { data, error } = useParentPlatform();
	const [extended, setExtended] = useState<Boolean>();
	const { slug } = useParams();
	const { pathname } = useLocation();
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	// if (!slug) return null;

	const find = data?.results.find((platform) => platform.slug === slug);
	
	useEffect(() => {
		if (!find) setExtended(true);
		if (find || !slug) {
			setExtended(false);
			find && setPlatformId(find?.id);
		}
	}, [find]);

	let selectedPlatform;
	
	if (platformId) selectedPlatform = data?.results?.find((el) => el.id === platformId);
	if (error instanceof Error) return <AlertCom msg={'An Error Occured'} />;
	
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
