import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import GameHeading from '../components/GameHeading';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Layout = () => {
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 
					'aside main'`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '260px 1fr',
			}}
		>
			<GridItem area={'nav'}>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'}>
					<SideBar />
				</GridItem>
			</Show>
			<GridItem area={'main'}>
				<Box
					paddingRight={'40px'}
				>
					<GameHeading />
					<Outlet />
				</Box>
			</GridItem>
		</Grid>
	);
};

export default Layout;
