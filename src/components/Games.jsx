/* eslint-disable react/prop-types */
import { Spinner, Box, HStack } from '@chakra-ui/react';
import GameHeading from './GameHeading';
import SortSelector from './SortSelector';
import PlatformSelector from './PlatformSelector';
import GameGrid from './GameGrid';
import { useLocation } from 'react-router-dom';
import useGameQueryStore from '../store';

const Games = (props) => {
	const { pathname } = useLocation();
	const { data, isInitialLoading } = props.data;
	const gameQuery = useGameQueryStore((state) => state.gameQuery);

	return (
		<>
			{isInitialLoading && <Spinner size={'xl'} />}

			<Box>
				{!gameQuery.searchValue && (
					<GameHeading data={data?.pages?.at(0)} />
				)}
				<Box mt={5}>
					<HStack mb={8}>
						{data && (
							<>
								{!gameQuery.searchValue && <SortSelector />}
								{pathname !== '/' && pathname !== '/games' && (
									<PlatformSelector />
								)}
							</>
						)}
					</HStack>
					<GameGrid data={props} />
				</Box>
			</Box>
		</>
	);
};

export default Games;
