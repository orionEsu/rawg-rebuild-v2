import padNum from './padNum';

const today = new Date();
export function getFormattedDate(date = today): string {
	const year = date.getFullYear();
	const month = padNum(date.getMonth() + 1);
	const currentDate = padNum(date.getDate());

	return `${year}-${month}-${currentDate}`;
}