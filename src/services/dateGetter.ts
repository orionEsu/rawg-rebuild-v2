import padNum from './padNum';

type DateGetter = {
	today: Date;
	year: number;
	month: string | number;
	date: string | number;
	day: number;
	lastDayOfTheMonth: number;
	startDateMonth: string | number;
};

export default (): DateGetter => {
	const today = new Date();
	const year = today.getFullYear();
	const date = padNum(today.getDate() + 1);
	const month = padNum(today.getMonth() + 1);

	const day = today.getDay();
	const lastDayOfTheMonth = new Date(year, Number(month), 0).getDate();

	const startDate = new Date();
	startDate.setDate(today.getDate() - 30); // 30 days ago
	const startDateMonth = padNum(startDate.getMonth() + 1);

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
