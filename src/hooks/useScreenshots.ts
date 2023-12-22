import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

<<<<<<< HEAD
type Screenshot = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		id: number;
		image: string;
	}[];
	
}
=======
>>>>>>> parent of 38d3585 (Add new types and update API calls)
const useScreenshots = (slug: string) => {
	const apiClient = new APIClient(`games/${slug}/screenshots`);
	return useQuery({
		queryKey: [`${slug}-screenshots`],
<<<<<<< HEAD
		queryFn: () => apiClient.get <Screenshot>(),
=======
		queryFn: () => apiClient.get(),
>>>>>>> parent of 38d3585 (Add new types and update API calls)
		staleTime: hrToMs(24),
	});
};

export default useScreenshots;
