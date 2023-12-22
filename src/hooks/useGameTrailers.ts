import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

<<<<<<< HEAD
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
=======
>>>>>>> parent of 38d3585 (Add new types and update API calls)
const useGameTrailers = (slug: string) => {
	const apiClient = new APIClient(`games/${slug}/movies`);
	return useQuery({
		queryKey: [`${slug}-trailers`],
<<<<<<< HEAD
		queryFn: () => apiClient.get<Trailer>(),
=======
		queryFn: () => apiClient.get(),
>>>>>>> parent of 38d3585 (Add new types and update API calls)
		staleTime: hrToMs(24),
	});
};

export default useGameTrailers;
