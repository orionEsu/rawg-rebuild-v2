export default (monthNumber) => {
	if (!monthNumber) return;

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

	// Return the month name
	return months[+index - 1];
};
