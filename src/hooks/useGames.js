import useData from './useData';

const useGames = (onSelected) =>
	useData('games', { params: { genres: onSelected?.id } }, onSelected);


export default useGames;
