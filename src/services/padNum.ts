export default (num: number): string | number => (num.toString().length === 1 ? `0${num}` : num);
