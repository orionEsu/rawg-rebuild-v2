import { create } from 'zustand';

const useGameQueryStore = create((set) => ({
	gameQuery: {},
	setGenreId: (genreId) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
	setPlatformId: (platformId) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
	setSearchValue: (searchValue) =>
		set(() => ({ gameQuery: { searchValue } })),
	setSortValue: (sortValue) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, sortValue } })),
	setDefault: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
