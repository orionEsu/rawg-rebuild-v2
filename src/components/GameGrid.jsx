/* eslint-disable react/prop-types */
import { SimpleGrid } from '@chakra-ui/react';
import React, { useCallback, useRef } from 'react';
import { arr } from '../data/loadingData';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';

const GameGrid = (props) => {
	const {
		data: {
			data,
			error,
			isFetching,
			isInitialLoading,
			isFetchingNextPage,
			fetchNextPage,
			hasNextPage,
		},
	} = props.data;

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
		[hasNextPage]
	);

	if (error) return <AlertCom msg={error.message} />;
	if (data?.pages.at(0).results.length === 0)
		return <AlertCom msg={'No Game in this Category'} />;

	return (
		<SimpleGrid
			marginTop={5}
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={'25px'}
			paddingBottom={14}
		>
			{isInitialLoading && arr.map((el, i) => <CardSkeleton key={i} />)}

			{data?.pages?.map((game, index) => (
				<React.Fragment key={index}>
					{game?.results.map((el, index) => {
						if (game.results.length === index + 1) {
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
			{hasNextPage &&
				isFetchingNextPage &&
				arr.map((el, i) => <CardSkeleton key={i} />)}
		</SimpleGrid>
	);
};

export default GameGrid;

// storing something between renders, or persists between renders that isn't part of out state refs are the best things to be used. Storing references to elements or document api. Ref isn't part of our state so it update every single time it changes
