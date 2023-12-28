import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

type GameDetails = {
	released: string;
	parent_platforms: {
		platform: {
			id: number;
			name: string;
			slug: string;
		};
	}[];
	description_raw?: string;
	rating_top: number;
	name: string;
	playtime: number;
	ratings_count: number;
	background_image: string;
	metacritic: number | null;
	genres: {
		id: number;
		name: string;
		slug: string;
		games_count: number;
		image_background: string;
	}[];
	developers: {
		id: number;
		name: string;
		slug: string;
		games_count: number;
		image_background: string;
	}[];
	publishers: {
		id: number;
		name: string;
		slug: string;
		games_count: number;
		image_background: string;
	}[];
	esrb_rating: {
		id: number;
		name: string;
		slug: string;
	} | null;
	website: string;
};
const useGameDetails = (endpoint: string) => {
	const apiClient = new APIClient(`games/${endpoint}`);

	return useQuery({
		queryKey: [endpoint],
		queryFn: apiClient.get<GameDetails>,
		staleTime: hrToMs(24),
	});
};

export default useGameDetails;
