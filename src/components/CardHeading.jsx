import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CardHeading = ({ gameQuery }) => {
	return (
		<Heading
			marginLeft={'10'}
			marginBottom={'7'}
			fontSize={'6xl'}
		>
		
			{gameQuery?.selectedPlatform?.name} {gameQuery?.selected?.name}{' '}
			Games
		</Heading>
	);
};

CardHeading.propTypes = {
	gameQuery: PropTypes.object,
};
export default CardHeading;
