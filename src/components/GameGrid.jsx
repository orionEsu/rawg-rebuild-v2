import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
	return (
		<SimpleGrid
			columns={3}
            spacing={'20px'}
            padding={'15'}
        >
            <GameCard/>
        </SimpleGrid>
	);
};

export default GameGrid;
