import { create } from 'zustand';

type Store = {
	gameQuery: {
		genreId?: number | '';
		platformId?: number | '';
		searchValue?: string;
		sortValue?: string;
	};
	setGenreId: (genreId: number | '') => void;
	setPlatformId: (platformId: number | '') => void;
	setSearchValue: (searchValue: string) => void;
	setSortValue: (sortValue: string) => void;
	setDefault: () => void;
};

const useGameQueryStore = create<Store>()((set) => ({
	gameQuery: {},
	setGenreId: (genreId) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
	setPlatformId: (platformId) =>
		set((state) => ({
			gameQuery: { ...state.gameQuery, platformId },
		})),
	setSearchValue: (searchValue) =>
		set(() => ({ gameQuery: { searchValue } })),
	setSortValue: (sortValue) =>
		set((state) => ({
			gameQuery: { ...state.gameQuery, sortValue },
		})),
	setDefault: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
