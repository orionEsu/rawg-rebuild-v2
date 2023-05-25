import { Box, Grid, GridItem, Show, HStack } from '@chakra-ui/react';
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

function App() {
	const [gameQuery, setGameQuery] = useState({
		selected: {},
		selectedPlatform: {},
		orderedValue: '',
		lastestRelease: false,
		thisWeek: false,
		nextWeek: false,
		allYear: false,
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
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area={'aside'}>
					<Box
						ml={'30px'}
						position={'sticky'}
						minH={'100vh'}
						marginTop={'7.6rem'}
					>
						<ReleasesList
							onSelectLast30Days={() =>
								setGameQuery({
									...gameQuery,
									lastestRelease: true,
									thisWeek: false,
									nextWeek: false,
									allYear: false,
								})
							}
							onSelectThisWeek={() =>
								setGameQuery({
									...gameQuery,
									thisWeek: true,
									lastestRelease: false,
									nextWeek: false,
									allYear: false,
								})
							}
							onSelectNextWeek={() =>
								setGameQuery({
									...gameQuery,
									nextWeek: true,
									thisWeek: false,
									lastestRelease: false,
									allYear: false,
								})
							}
							onSelectAllYear={() =>
								setGameQuery({
									...gameQuery,
									allYear: true,
									nextWeek: false,
									thisWeek: false,
									lastestRelease: false,
								})
							}
						/>
						<GenreList
							onSelected={(genre) =>
								setGameQuery({
									...gameQuery,
									selected: genre,
									lastestRelease: false,
									thisWeek: false,
									nextWeek: false,
								})
							}
							gameQuery={gameQuery}
						/>
					</Box>
				</GridItem>
			</Show>
			<GridItem area={'main'}>
				<CardHeading gameQuery={gameQuery} />
				<Box marginX={'10'}>
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
					<GameGrid gameQuery={gameQuery} />
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
