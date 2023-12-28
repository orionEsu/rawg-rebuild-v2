import { UseInfiniteQueryResult } from '@tanstack/react-query';

export type Heading = {
	seo_h1: string;
};

export type GameHeadingProps = {
	title: string | undefined;
	description?: string | undefined;
};

export type GameCardData = {
	next?: string;
	previous?: string;
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

export type Genre = {
	id: number;
	slug: string;
	name: string;
	image_background: string;
}[];

export type GenreData = {
	count: number;
	next: string | null;
	previous: string | null;
	results: Genre;
};

export type APIHeading = {
	seo_h1: string;
	description: string;
};

type Platform = {
	id: number;
	name: string;
	slug: string;
	game_count: number;
	image_background: string;
	image: null;
	year_start: null;
	year_end: null;
}[];

export type ParentPlatform = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		id: number;
		name: string;
		slug: string;
		platforms: Platform;
	}[];
};

export type T = UseInfiniteQueryResult<GameCardData, unknown>;