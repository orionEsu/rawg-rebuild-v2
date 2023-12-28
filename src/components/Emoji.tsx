import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

const Emoji = ({ rating }: { rating: number }) => {
	if (rating < 3) return null;

	return (
		<Box
			backgroundImage={
				rating === 3
					? `url(${meh})`
					: rating === 4
					? `url(${bullsEye})`
					: `url(${thumbsUp})`
			}
			backgroundSize={'contain'}
			display={'inherit'}
			width={'25px'}
			height={'25px'}
		></Box>
	);
};

Emoji.propTypes = {
	rating: PropTypes.number,
};

export default Emoji;
