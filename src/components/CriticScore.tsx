import { Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CriticScore = ({ score }) => {
	let color = score > 70 ? '#6dc849' : score > 60 ? 'yellow' : 'white';

	return (
		<Badge
			color={color}
			px={2}
			py={1}
			fontWeight={'900'}
			fontSize={'md'}
			borderRadius={5}
		>
			{score || 'NR'}
		</Badge>
	);
};

CriticScore.propTypes = {
	score: PropTypes.number,
};
export default CriticScore;
