import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';
import platforms from '../data/platforms';

const apiClient = new APIClient('platforms/lists/parents');

// type platform = {
// 	id: number;
// 	name: string;
// 	slug: string;
// 	game_count: number;
// 	image_background: string;
// 	image: null;
// 	year_start: null;
// 	year_end: null;
// }[];

// type parentPlatform = {
// 	count: number;
// 	next: string | null;
// 	previous: string | null;
// 	results: {
// 		id: number;
// 		name: string;
// 		slug: string;
// 		platforms: platform;
// 	}[];
// };

const useParentPlatform = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getGameInfo,
		staleTime: hrToMs(24),
		initialData: platforms,
	});

export default useParentPlatform;
