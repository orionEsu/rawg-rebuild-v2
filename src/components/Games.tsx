import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import useGameQueryStore from '../store';
import { T, GameHeadingProps } from '../types';
import GameGrid from './GameGrid';
import GameHeading from './GameHeading';
import PlatformSelector from './PlatformSelector';
import SortSelector from './SortSelector';

const Games = ({ heading, data }: { heading: GameHeadingProps; data: T }) => {
	const arrowRef = useRef<HTMLButtonElement | null>(null);
	const dummyEl = useRef<HTMLParagraphElement | null>(null);
	const { pathname } = useLocation();
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const nav = document.querySelector('.navBar');
	const scrollWatcher = document.querySelector('.scrollWatcher');
	const navObserver = new IntersectionObserver(
		(entries) => {
			nav && nav.classList.toggle('sticking', !entries[0].isIntersecting);
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
	dummyEl?.current && gamesObserver?.observe(dummyEl?.current);

	return (
		<>
			{gameQuery.searchValue && (
				<Text
					display={'flex'}
					flexWrap={'wrap'}
					fontWeight={'500'}
					color={'gray.600'}
					fontSize={'lg'}
					justifyContent={'right'}
					mr={'45px'}
				>
					Searched for {gameQuery.searchValue}{' '}
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
				{!gameQuery.searchValue && <GameHeading heading={heading} />}
				<Box mt={5}>
					<HStack mb={8}>
						(
						<>
							{!gameQuery.searchValue && <SortSelector />}
							{pathname !== '/' &&
								pathname !== '/next-week' &&
								pathname !== '/this-week' &&
								pathname !== '/last-30-days' && (
									<PlatformSelector />
								)}
						</>
						)
					</HStack>
					<GameGrid data={data} />
				</Box>
			</Box>
			<Text
				ref={dummyEl}
				position={'absolute'}
				top={'85vh'}
				pointerEvents={'none'}
			></Text>
			<Button
				position={'fixed'}
				bottom={'20px'}
				right={'15px'}
				width={'50px'}
				height={'50px'}
				borderRadius={'50%'}
				backgroundColor={'#888'}
				boxShadow={'0px 3px 5px 0px rgba(0, 0, 0, 0.5)'}
				transition={'all .2s ease'}
				ref={arrowRef}
				className={'show-arrow arrow'}
				_hover={{
					transform: 'scale(0.9)',
				}}
				onClick={() => window.scrollTo(0, 0)}
			>
				<FaArrowUp fill='black' />
			</Button>
		</>
	);
};

export default Games;
