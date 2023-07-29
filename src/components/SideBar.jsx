import GenreList from './GenreList';
import { Button, Box } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import useGameQueryStore from '../store';
import NewReleasesList from './NewReleasesList';
import TopReleases from './TopReleases';
import BrowseList from './BrowseList';
import PlatformList from './PlatformList';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const SideBar = () => {
	const [sidebarStyles, setSidebarStyles] = useState();
	const sidebarContentRef = useRef(null);
	const setDefault = useGameQueryStore((state) => state.setDefault);

	const nav = document.querySelector('.navBar');
	const scrollWatcher = document.querySelector('.scrollWatcher');
	const navObserver = new IntersectionObserver(
		(entries) => {
			nav.classList.toggle('sticking', !entries[0].isIntersecting);
		},
		{
			rootMargin: '20px 0px 0px 0px',
		}
	);
	navObserver?.observe(scrollWatcher);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const sidebarContent = sidebarContentRef.current;
			const viewPort = window.innerHeight;
			const sidebarContentHeight =
				sidebarContent?.getBoundingClientRect().height;

			if (sidebarContent && scrollTop >= 1351.17 - viewPort) {
				setSidebarStyles({
					position: 'fixed',
					transform: `translateY(-${1351.17 - viewPort}px)`,
				});
			} else {
				setSidebarStyles({
					position: '',
					transform: `translateY(0)`,
				});
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		// return () => {
		// 	window.removeEventListener('scroll', handleScroll);
		// };
	}, []);

	return (
		<Box
			minH={'100vh'}
			paddingLeft={'40px'}
			// transition={'transform .1s ease'}
			className={'sidebar-content'}
			ref={sidebarContentRef}
			style={sidebarStyles}
		>
			<Link to={''}>
				<Button
					variant={'link'}
					style={{ textDecoration: 'none' }}
					_hover={{ color: 'hsla(0,0%,100%,.4)' }}
					fontSize={'24px'}
					fontWeight={'700'}
					display={'flex'}
					columnGap={2}
					mt={'2rem'}
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
		</Box>
	);
};

export default SideBar;
