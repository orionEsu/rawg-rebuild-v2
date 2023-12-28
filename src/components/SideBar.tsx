import { Box, Heading } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';
import useGameQueryStore from '../store';
import BrowseList from './BrowseList';
import NewReleasesList from './NewReleasesList';
import TopReleases from './TopReleases';

const SideBar = () => {
	const setDefault = useGameQueryStore((state) => state.setDefault);
	return (
		<Box
			minH={'100vh'}
			paddingLeft={'40px'}
			className={'sidebar'}
			position={'sticky'}
			top={'0'}
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

			<NewReleasesList onClose={() => {}}/>
			<TopReleases onClose={() => {}}/>
			<BrowseList onClose={() => {}}/>
		</Box>
	);
};

export default SideBar;
