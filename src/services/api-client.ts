import instance from './url-client';

type ChildPlatform = {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	image: null;
	year_start: null;
	year_end: null;
};
type ParentPlatform = {
	id: number;
	slug: string;
	name: string;
	platforms: ChildPlatform[];
};

type Games = {
	count: number;
	next: string | null;
	previous: string | null;
	results: ParentPlatform[];
};

type Filter = {
	filter: boolean;
	ordering?: string;
	search?: string;
	page?: number;
	dates?: `${string},${string}`;
	parent_platforms?: number | string;
	platforms?: number | string;
};

type GameInfoParam<TFilter = Filter>  = { params?: TFilter }

class APIClient {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getGameInfo = <TResponse>(params: GameInfoParam): Promise<TResponse> => {
		return instance.get(this.endpoint, params)
			.then((res) => res.data);
	};

	get = <T>(): Promise<T> =>
		instance
			.get(this.endpoint, {
				params: {
					filter: true,
				},
			})
			.then((res) => res.data);
}

export default APIClient;
