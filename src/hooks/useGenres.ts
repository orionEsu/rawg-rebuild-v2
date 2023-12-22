import { useQuery } from '@tanstack/react-query';
import { hrToMs } from '../services/timeConverter';
import APIClient from '../services/api-client';
import genres from '../data/genres';

type Genre = {
	id: number;
	slug: string;
	name: string;
	image_background: string;
}[];

type GenreData = {
	count: number;
	next: string | null;
	previous: string | null;
	results: Genre;
};

const apiClient = new APIClient('genres');
const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () =>
			apiClient.getGameInfo<{}, GenreData>({
				params: {},
			}),
		staleTime: hrToMs(24),
		initialData: genres,
	});

export default useGenres;
