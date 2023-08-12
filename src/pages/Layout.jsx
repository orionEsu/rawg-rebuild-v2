import { Grid, GridItem, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Layout = () => {
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				xl: `'nav nav' 
					'aside main'`,
			}}
			templateColumns={{
				base: '1fr',
				xl: '240px 1fr',
			}}
		>
			<div className='scrollWatcher'></div>
			<GridItem
				area={'nav'}
				position={'sticky'}
				top={0}
				className='navBar'
				zIndex={100}
			>
				<NavBar />
			</GridItem>
			<Show above='xl'>
				<GridItem
					area={'aside'}
					
				>
					<SideBar />
				</GridItem>
			</Show>
			<GridItem area={'main'}>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default Layout;
