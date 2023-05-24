import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const AlertCom = ({ msg }) => {
	return (
		<Alert status='error'>
			<AlertIcon />
			<AlertTitle>{msg}</AlertTitle>
		</Alert>
	);
};

AlertCom.propTypes = {
	msg: PropTypes.string,
};

export default AlertCom;
