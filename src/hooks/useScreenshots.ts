import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { hrToMs } from '../services/timeConverter';

type Screenshots = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		id: number;
		image: string;
	}[];
};

const useScreenshots = (slug: string) => {
	const apiClient = new APIClient(`games/${slug}/screenshots`);
	return useQuery({
		queryKey: [`${slug}-screenshots`],
		queryFn: () => apiClient.get<Screenshots>(),
		staleTime: hrToMs(24),
	});
};

export default useScreenshots;
