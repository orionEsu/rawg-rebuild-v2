import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

type Trailers = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		id: number;
		name: string;
		preview: string;
		data: {
			max: string;
			480: string;
		};
	}[];
};
const useGameTrailers = (slug: string) => {
	const apiClient = new APIClient(`games/${slug}/movies`);
	return useQuery({
		queryKey: [`${slug}-trailers`],
		queryFn: () => apiClient.get<Trailers>(),
		staleTime: hrToMs(24),
	});
};

export default useGameTrailers;
