import { SimpleGrid } from '@chakra-ui/react';
import React, { useCallback, useRef } from 'react';
import { arr } from '../data/loadingData';
import { T } from '../types';
import AlertCom from './AlertCom';
import CardSkeleton from './CardSkeleton';
import GameCard from './GameCard';

const GameGrid = ({ data }: { data: T }) => {
	const {
		data: gameData,
		error,
		isFetching,
		isInitialLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = data;
	const observer = useRef<IntersectionObserver | null>();
	const getLastElementRef = useCallback(
		(node: Element | null) => {
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
	if (error instanceof Error) {
		return <AlertCom msg={error.message} />;
	}
	if (gameData?.pages.at(0).results.length === 0)
		return <AlertCom msg={'No Game in this Category'} />;

	return (
		<SimpleGrid
			marginTop={5}
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={'25px'}
			paddingBottom={14}
		>
			{isInitialLoading && arr.map((_, i) => <CardSkeleton key={i} />)}

			{gameData?.pages?.map((page, index) => (
				<React.Fragment key={index}>
					{page.results.map((sgame, index) => {
						if (page?.results.length === index + 1) {
							return (
								<GameCard
									ref={getLastElementRef}
									game={sgame}
									key={index}
								/>
							);
						} else {
							return (
								<GameCard
									game={sgame}
									key={index}
								/>
							);
						}
					})}
					{/* {page?.pages?.map?.((page) => {
						return page.results.map((sgame, index) => {
							// if (page?.results.length === index + 1) {
							// 	return (
							// 		<GameCard
							// 			ref={getLastElementRef}
							// 			game={sgame}
							// 			key={index}
							// 		/>
							// 	);
							// } else {
							// 	return (
							// 		<GameCard
							// 			game={sgame}
							// 			key={index}
							// 		/>
							// 	);
							// }
							return (
								<GameCard
									ref={getLastElementRef}
									game={sgame}
									key={index}
								/>
							);
						});
					})} */}
				</React.Fragment>
			))}
			{hasNextPage &&
				isFetchingNextPage &&
				arr.map((_, i) => <CardSkeleton key={i} />)}
		</SimpleGrid>
	);
};

export default GameGrid;

// storing something between renders, or persists between renders that isn't part of out state refs are the best things to be used. Storing references to elements or document api. Ref isn't part of our state so it update every single time it changes
