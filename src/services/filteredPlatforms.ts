const filteredPlatform = (platforms) => {
	const filterPlatform = platforms?.results.filter(
		(el) => el.slug !== '3do' && el.slug !== 'neo-geo'
	);
	return filterPlatform?.map((el) => el.platforms.at(0));
};

export default filteredPlatform;