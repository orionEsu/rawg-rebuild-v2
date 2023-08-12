/* eslint-disable react/prop-types */
import { Box, HStack, Text, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import useGameQueryStore from '../store';
import GameGrid from './GameGrid';
import GameHeading from './GameHeading';
import PlatformSelector from './PlatformSelector';
import SortSelector from './SortSelector';
import { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Games = (props) => {
	const arrowRef = useRef(null);
	const { pathname } = useLocation();
	const { data } = props.data;
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const nav = document.querySelector('.navBar');
	const scrollWatcher = document.querySelector('.scrollWatcher');
	const sidebar = document.querySelector('.sidebar');
	const navObserver = new IntersectionObserver(
		(entries) => {
			nav.classList.toggle('sticking', !entries[0].isIntersecting);
		},
		{
			rootMargin: '20px 0px 0px 0px',
		}
	);
	scrollWatcher && navObserver?.observe(scrollWatcher);
	const gamesObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const intersecting = entry.isIntersecting;
			arrowRef.current?.classList.toggle('show-arrow', intersecting);
		});
	});
	sidebar && gamesObserver?.observe(sidebar);

	return (
		<>
			{gameQuery.searchValue && (
				<Text
					display={'flex'}
					fontWeight={'500'}
					color={'gray.600'}
					fontSize={'lg'}
					justifyContent={'right'}
					mr={'45px'}
				>
					Searched for {gameQuery.searchValue}{' '}
					{data && (
						<span>: Found {data?.pages.at(0).count} Games</span>
					)}
				</Text>
			)}
			<Box
				paddingRight={{
					base: 8,
					md: 12,
					lg: 14,
					xl: '40px',
				}}
				paddingLeft={{
					base: 8,
					md: 12,
					lg: 14,
					xl: 0,
				}}
				marginTop={4}
			>
				{!gameQuery.searchValue && data && (
					<GameHeading data={data?.pages?.at(0)} />
				)}
				<Box mt={5}>
					<HStack mb={8}>
						(
						<>
							{!gameQuery.searchValue && <SortSelector />}
							{pathname !== '/' && !gameQuery.searchValue && (
								<PlatformSelector />
							)}
						</>
						)
					</HStack>
					<GameGrid data={props} />
				</Box>
			</Box>
			<Button
				ref={arrowRef}
				position={'fixed'}
				bottom={'20px'}
				right={'15px'}
				width={'50px'}
				height={'50px'}
				transition={'all .2s ease'}
				className={'show-arrow'}
				backgroundColor={'black'}
				boxShadow={'0px 3px 5px 0px rgba(0,0,0, .5)'}
				onClick={() => window.scrollTo(0, 0)}
			>
				<FaArrowUp />
			</Button>
		</>
	);
};

export default Games;
