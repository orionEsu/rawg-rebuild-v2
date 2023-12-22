import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

type Trailer = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		data: {
			480: string;
			max: string;
		};
		id: number;
		name: string;
		preview: string;
	}[];
};
const useGameTrailers = (slug: string) => {
	const apiClient = new APIClient(`games/${slug}/movies`);
	return useQuery({
		queryKey: [`${slug}-trailers`],
		queryFn: () => apiClient.get<Trailer>(),
		staleTime: hrToMs(24),
	});
};

export default useGameTrailers;
