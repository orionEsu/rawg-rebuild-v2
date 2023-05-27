import { Box, Grid, GridItem, Show, HStack, Button } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import ReleasesList from './components/ReleasesList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import CardHeading from './components/CardHeading';
import LatestRelease from './components/LatestRelease';
import ThisWeekReleases from './components/ThisWeekReleases';
import NextWeekReleases from './components/NextWeekReleases';
import BoyReleases from './components/BoyReleases';
import { GoHome } from 'react-icons/go';

function App() {
	const [gameQuery, setGameQuery] = useState({
		selected: {},
		selectedPlatform: {},
		orderedValue: '',
		lastestRelease: false,
		thisWeek: false,
		nextWeek: false,
		allYear: false,
		searchValue: '',
	});

	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 
					'aside main'`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area={'nav'}>
				<NavBar
					onSearchEnter={(value) =>
						setGameQuery({
							...gameQuery,
							searchValue: value,
							lastestRelease: false,
							thisWeek: false,
							nextWeek: false,
							allYear: false,
						})
					}
				/>
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'}>
					<Box
						ml={'30px'}
						position={'sticky'}
						minH={'100vh'}
					>
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
							onClick={() =>
								setGameQuery({
									...gameQuery,
									selected: {},
									selectedPlatform: {},
									orderedValue: '',
									lastestRelease: false,
									thisWeek: false,
									nextWeek: false,
									allYear: false,
									searchValue: '',
								})
							}
						>
							<GoHome />
							Home
						</Button>
						<ReleasesList
							onSelectLast30Days={() =>
								setGameQuery({
									...gameQuery,
									lastestRelease: true,
									thisWeek: false,
									nextWeek: false,
									allYear: false,
									selectedPlatform: {},
									orderedValue: '',
								})
							}
							onSelectThisWeek={() =>
								setGameQuery({
									...gameQuery,
									thisWeek: true,
									lastestRelease: false,
									nextWeek: false,
									allYear: false,
									selectedPlatform: {},
									orderedValue: '',
								})
							}
							onSelectNextWeek={() =>
								setGameQuery({
									...gameQuery,
									nextWeek: true,
									thisWeek: false,
									lastestRelease: false,
									allYear: false,
									selectedPlatform: {},
									orderedValue: '',
								})
							}
							onSelectAllYear={() =>
								setGameQuery({
									...gameQuery,
									allYear: true,
									nextWeek: false,
									thisWeek: false,
									lastestRelease: false,
									selectedPlatform: {},
									orderedValue: '',
								})
							}
							gameQuery={gameQuery}
						/>
						<GenreList
							onSelected={(genre) =>
								setGameQuery({
									...gameQuery,
									selected: genre,
									lastestRelease: false,
									thisWeek: false,
									nextWeek: false,
									allYear: false,
									selectedPlatform: {},
									orderedValue: '',
								})
							}
							gameQuery={gameQuery}
						/>
					</Box>
				</GridItem>
			</Show>
			<GridItem area={'main'}>
				<CardHeading gameQuery={gameQuery} />
				<Box marginX={'5'}>
					{(Object.keys(gameQuery?.selected).length !== 0 ||
						Object.keys(
							gameQuery?.lastestRelease.length !== 0
						)) && (
						<HStack spacing={8}>
							<PlatformSelector
								onSelectedPlatform={(platform) =>
									setGameQuery({
										...gameQuery,
										selectedPlatform: platform,
									})
								}
								gameQuery={gameQuery}
							/>

							<SortSelector
								onSort={(value) =>
									setGameQuery({
										...gameQuery,
										orderedValue: value,
									})
								}
								gameQuery={gameQuery}
							/>
						</HStack>
					)}
					{gameQuery.lastestRelease && (
						<LatestRelease gameQuery={gameQuery} />
					)}
					{gameQuery.thisWeek && (
						<ThisWeekReleases gameQuery={gameQuery} />
					)}
					{gameQuery.nextWeek && (
						<NextWeekReleases gameQuery={gameQuery} />
					)}
					{gameQuery.allYear && <BoyReleases gameQuery={gameQuery} />}

					{!gameQuery.lastestRelease &&
						!gameQuery.thisWeek &&
						!gameQuery.nextWeek &&
						!gameQuery.allYear && (
							<GameGrid gameQuery={gameQuery} />
						)}
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
