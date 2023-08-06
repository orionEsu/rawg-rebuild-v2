import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

const Emoji = ({ rating }) => {
	if (rating < 3) return null;

	const emojiMap = {
		3: { src: meh, alt: 'meh', boxSize: '25px' },
		4: { src: bullsEye, alt: 'recommended', boxSize: '35px' },
		5: { src: thumbsUp, alt: 'exceptional', boxSize: '25px' },
	};

	return <Image {...emojiMap[rating]} display={'inline'} marginLeft={'.3rem'}/>;
};

Emoji.propTypes = {
	rating: PropTypes.number,
};

export default Emoji;
