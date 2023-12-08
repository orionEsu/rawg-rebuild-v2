export default (monthNumber: string): string | null => {
	if (!monthNumber) return null;

	let index;
	monthNumber[0] === '0' ? (index = monthNumber[1]) : (index = monthNumber);

	const months = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'May',
		'JUN',
		'JUL',
		'AUG',
		'Sep',
		'OCT',
		'NOV',
		'DEC',
	];

	return months[+index - 1];
};
