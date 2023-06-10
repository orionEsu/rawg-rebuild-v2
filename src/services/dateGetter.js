export default () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;

	const modifiedMonth =
		today.getMonth().toString().length === 1 ? `0${month}` : month;
	const date =
		today.getDate().toString().length === 1
			? `0${today.getDate()}`
			: today.getDate();

    const day = today.getDay();
    
    const lastDayOfTheMonth = new Date(year, modifiedMonth, 0).getDate();

	return { today, year, modifiedMonth, date, day, lastDayOfTheMonth };
};
