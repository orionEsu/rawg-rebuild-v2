import GenreList from './GenreList';
import { Button, Box } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';
import useGameQueryStore from '../store';

const SideBar = () => {
	const setDefault = useGameQueryStore((state) => state.setDefault);

	return (
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
				onClick={() => setDefault()}
			>
				<GoHome />
				Home
			</Button>
			{/* <ReleasesList
							onSelectLast30Days={() =>
								setGameQuery({
									...gameQuery,
									lastestRelease: true,
									thisWeek: false,
									nextWeek: false,
									allYear: false,
									platformId: {},
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
									platformId: {},
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
									platformId: {},
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
									platformId: {},
									orderedValue: '',
								})
							}
							gameQuery={gameQuery}
						/> */}
			<GenreList />
		</Box>
	);
};

export default SideBar;
