import { SimpleGrid } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { arr } from '../data/loadingData';
import useGames from '../hooks/useGames';
import useGameQueryStore from '../store';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';

const GameGrid = () => {
	// const [isLoading, setIsLoading] = useState(true);
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	const {
		data,
		error,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);

	const observer = useRef();
	const getLastElementRef = useCallback(
		(node) => {
			if (isFetching || isFetchingNextPage) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					fetchNextPage();
				}
			});
			if (node) observer.current.observe(node);
		},
		[isFetching, hasNextPage]
	);

	// useEffect(() => {
	// 	if (!isFetching) setIsLoading(false);
	// }, [isFetching]);

	if (error) return <AlertCom msg={error.message} />;

	return (
		<SimpleGrid
			marginTop={5}
			columns={{ sm: 1, md: 2, lg: 3 }}
			spacing={'25px'}
		>
			{isFetching && arr.map((el) => <CardSkeleton key={el} />)}
			{data?.pages?.map((game) => (
				<React.Fragment key={game.id}>
					{game?.results.map((el, index) => {
						if (index === 6) {
							return (
								<GameCard
									ref={getLastElementRef}
									game={el}
									key={el.id}
								/>
							);
						} else {
							return (
								<GameCard
									game={el}
									key={el.id}
								/>
							);
						}
					})}
				</React.Fragment>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;

// storing something between renders, or persists between renders that isn't part of out state refs are the best things to be used. Storing references to elements or document api. Ref isn't part of our state so it update every single time it changes
