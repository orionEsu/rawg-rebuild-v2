import { Heading } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const HeadingEl = ({ msg, msg2, msg3 }) => {
	return (
		<Heading
			marginLeft={'10'}
			marginBottom={'7'}
			fontSize={'6xl'}
		>
			{msg} {msg2} {msg3}
		</Heading>
	);
};

HeadingEl.propTypes = {
	msg: PropTypes.string,
	msg2: PropTypes.string,
	msg3: PropTypes.string,
};
export default HeadingEl;
