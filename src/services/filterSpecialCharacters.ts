const filterSpecialCharacters = (val: string): string =>
	val.replace(/<[^>]*>/g, '').replace(/[^a-zA-Z.,;0-9]/g, ' ');

export default filterSpecialCharacters;
