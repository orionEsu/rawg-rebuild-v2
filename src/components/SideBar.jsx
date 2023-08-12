import { Box, Heading } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';
import useGameQueryStore from '../store';
import BrowseList from './BrowseList';
import GenreList from './GenreList';
import NewReleasesList from './NewReleasesList';
import PlatformList from './PlatformList';
import TopReleases from './TopReleases';

const SideBar = () => {
	const setDefault = useGameQueryStore((state) => state.setDefault);

	return (
		<Box
			minH={'100vh'}
			paddingLeft={'40px'}
			className={'sidebar'}
		>
			<Heading
				transition={'color .2s ease'}
				_hover={{ color: 'hsla(0,0%,100%,.4)' }}
				fontSize={'24px'}
				fontWeight={'700'}
				mt={'2rem'}
				mb={'4rem'}
				color={'gray.50'}
				onClick={() => setDefault()}
				maxW={'fit-content'}
			>
				<Link
					to={''}
					style={{ display: 'flex', columnGap: '.4rem' }}
				>
					<GoHome />
					Home
				</Link>
			</Heading>

			<NewReleasesList />
			<TopReleases />
			<BrowseList />

			<Box
				mb={'30px'}
				mt={'30px'}
			>
				<PlatformList />
			</Box>
			<GenreList />
		</Box>
	);
};

export default SideBar;
