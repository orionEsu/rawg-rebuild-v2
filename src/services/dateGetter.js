import padNum from './padNum';

export default () => {
	const today = new Date();
	const year = today.getFullYear();
	const { date, month } = padNum(today.getDate() + 1, today.getMonth() + 1);

	const day = today.getDay();
	const lastDayOfTheMonth = new Date(year, month, 0).getDate();

	const startDate = new Date();
	startDate.setDate(today.getDate() - 30); // 30 days ago
	const { date: sdm, month: startDateMonth } = padNum(
		0,
		startDate.getMonth() + 1
	);

	return {
		today,
		year,
		month,
		date,
		day,
		lastDayOfTheMonth,
		startDateMonth,
	};
};
