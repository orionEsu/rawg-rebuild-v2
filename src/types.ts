import { UseInfiniteQueryResult } from '@tanstack/react-query';

export type Heading = {
	seo_h1: string;
};

export type GameHeadingProps = {
	title: string | undefined;
	description?: string | undefined;
};

export type GameCardData = {
	pageParams: (undefined | number)[];
	pages: Array<{
		results: Array<{
			metacritic: number;
			name: string;
			rating_top: number;
			slug: string;
			background_image: string;
			parent_platforms: Array<{
				platform: {
					id: number;
					slug: string;
					name: string;
				};
			}>;
		}>;
	}>;
};


export type GameCardProps = {
	name: string;
	metacritic: number;
	rating_top: number;
	slug: string;
	background_image: string;
	parent_platforms: Array<{
		platform: {
			id: number;
			slug: string;
			name: string;
		};
	}>;
};

export type T = UseInfiniteQueryResult<GameCardData, unknown>;