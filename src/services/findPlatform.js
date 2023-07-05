import platforms from '../data/platforms';

export default (slug) => {
	const filteredPlatform = platforms?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);
	return filteredPlatform
		?.map((el) => el.platforms.at(0))
		.find((platform) => platform.slug === slug);
};
