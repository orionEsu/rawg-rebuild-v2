const getCroppedUrl = (url) => {
	console.log(url);
	const description = 'media/';
	const val = url.indexOf(description) + description.length;

	return url.slice(0, val) + 'crop/600/400/' + url.slice(val);
};

export default getCroppedUrl;
