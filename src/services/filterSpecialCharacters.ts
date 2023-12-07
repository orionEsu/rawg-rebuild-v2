const filterSpecialCharacters = (string) => {
	return string.slice(3, -4).replaceAll(/[^a-zA-Z.,;0-9]/g, ' ');
};
export default filterSpecialCharacters;
