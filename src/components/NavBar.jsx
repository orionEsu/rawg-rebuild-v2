import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Show,
	Text,
	MenuButton,
	Icon,
	Menu,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import '../index.css';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';
import useGameQueryStore from '../store';
import BrowseList from './BrowseList';
import GenreList from './GenreList';
import NewReleasesList from './NewReleasesList';
import PlatformList from './PlatformList';
import SearchInput from './SearchInput';
import TopReleases from './TopReleases';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
	const setDefault = useGameQueryStore((state) => state.setDefault);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Box
				px={10}
				paddingBlock={'1rem'}
				display={'flex'}
				alignContent={'center'}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexDirection={{
					base: 'column',
					lg: 'row',
				}}
				rowGap={5}
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
						fontSize={'18px'}
						fontWeight={'extrabold'}
						lineHeight={1}
						letterSpacing={'5px'}
						color={'#fff'}
					>
						RAWG
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
					</DrawerBody>

					{/* <DrawerFooter>
						<Button
							variant='outline'
							mr={3}
							onClick={onClose}
						>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter> */}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavBar;
