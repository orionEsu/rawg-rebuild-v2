import { Badge } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CriticScore = ({ score }) => {
	let color = score > 70 ? 'green' : score > 60 ? 'yellow' : '';

	return (
		<Badge
			variant={'outline'}
			colorScheme={color}
			px={2}
			py={0.5}
            fontWeight={'900'}
            fontSize={'13px'}
            borderRadius={5}
		>
			{score}
		</Badge>
	);
};

CriticScore.propTypes = {
	score: PropTypes.number.isRequired,
};
export default CriticScore;
