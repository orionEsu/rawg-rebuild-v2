/* eslint-disable react/prop-types */
import { Box, HStack, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import useGameQueryStore from '../store';
import GameGrid from './GameGrid';
import GameHeading from './GameHeading';
import PlatformSelector from './PlatformSelector';
import SortSelector from './SortSelector';

const Games = (props) => {
	const { pathname } = useLocation();
	const { data } = props.data;
	const gameQuery = useGameQueryStore((state) => state.gameQuery);

	return (
		<>
			{gameQuery.searchValue && (
				<Text
					display={'flex'}
					fontWeight={'500'}
					color={'gray.600'}
					fontSize={'xl'}
					justifyContent={'right'}
				>
					Found {data?.pages.at(0).count} Items
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
			>
				{!gameQuery.searchValue && data && (
					<GameHeading data={data?.pages?.at(0)} />
				)}
				<Box mt={5}>
					<HStack mb={8}>
						(
						<>
							{!gameQuery.searchValue && <SortSelector />}
							{pathname !== '/' && pathname !== '/games' && (
								<PlatformSelector />
							)}
						</>
						)
					</HStack>
					<GameGrid data={props} />
				</Box>
			</Box>
		</>
	);
};

export default Games;
