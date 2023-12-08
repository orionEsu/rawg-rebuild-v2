const filterSpecialCharacters = (val: string): string =>
	val.slice(3, -4).replace(/[^a-zA-Z.,;0-9]/g, ' ');

export default filterSpecialCharacters;
