import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	Show,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { GoHome } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import '../index.css';
import useGameQueryStore from '../store';
import BrowseList from './BrowseList';
import NewReleasesList from './NewReleasesList';
import SearchInput from './SearchInput';
import TopReleases from './TopReleases';

const NavBar = () => {
	const setDefault = useGameQueryStore((state) => state.setDefault);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<any | null>();

	return (
		<>
			<Box
				px={{
					base: 8,
					md: 12,
					lg: 14,
					xl: '40px',
				}}
				paddingBlock={'1rem'}
				display={'flex'}
				alignContent={'center'}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexDirection={{
					base: 'column',
					lg: 'row',
				}}
				rowGap={{ base: 1, lg: 5 }}
			>
				<Box
					display={{
						base: 'flex',
						lg: 'block',
					}}
					justifyContent={'space-between'}
					alignItems={'center'}
					width={{
						base: '100%',
						md: '500px',
					}}
				>
					<Text
						fontFamily={'orbitron'}
						fontSize={'18px'}
						fontWeight={'extrabold'}
						lineHeight={1}
						letterSpacing={'5px'}
						color={'#fff'}
						onClick={() => setDefault()}
					>
						<Link to={'/'}>RAWG</Link>
					</Text>

					<Show below='lg'>
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label='Options'
								variant='outline'
								ref={btnRef}
								onClick={onOpen}
								border={'none'}
							>
								<Icon
									as={RxHamburgerMenu}
									boxSize={6}
								/>
							</MenuButton>
						</Menu>
					</Show>
				</Box>
				<SearchInput />
			</Box>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />

					<DrawerBody pl={'40px'}>
						<Link to={''}>
							<Button
								variant={'link'}
								style={{ textDecoration: 'none' }}
								_hover={{ color: 'hsla(0,0%,100%,.4)' }}
								fontSize={'24px'}
								fontWeight={'700'}
								display={'flex'}
								columnGap={2}
								mt={'3rem'}
								mb={'4rem'}
								color={'gray.50'}
								onClick={() => setDefault()}
							>
								<GoHome />
								Home
							</Button>
						</Link>

						<NewReleasesList onClose={onClose} />
						<TopReleases onClose={onClose} />
						<BrowseList onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavBar;
