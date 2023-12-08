import noImage from '../assets/no-image-placeholder (1).webp';

const getCroppedUrl = (url: string): string => {
	if (!url) return noImage;
	const description = 'media/';
	const val = url.indexOf(description) + description.length;
	return url.slice(0, val) + 'crop/600/400/' + url.slice(val);
};

export default getCroppedUrl;
