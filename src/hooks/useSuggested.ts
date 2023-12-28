import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

type Suggested = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		id: number;
		slug: string;
		background_image: string;
		metacritic: number;
		name: string;
		rating_top: number;
		parent_platforms: Array<{
			platform: {
				id: number;
				slug: string;
				name: string;
			};
		}>;
	}[];
};
const useSuggested = (slug: string) => {
	const apiClient = new APIClient(`games/${slug}/game-series`);
	return useQuery({
		queryKey: [`otherGameIn-${slug}-series`],
		queryFn: () => apiClient.get<Suggested>(),
		staleTime: hrToMs(24),
	});
};

export default useSuggested;
