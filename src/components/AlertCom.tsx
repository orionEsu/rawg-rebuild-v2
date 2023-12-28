import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const AlertCom = ({ msg }: { msg: string }) => {
	return (
		<Alert
			status='error'
			mt={5}
		>
			<AlertIcon />
			<AlertTitle>{msg}</AlertTitle>
		</Alert>
	);
};

AlertCom.propTypes = {
	msg: PropTypes.string,
};

export default AlertCom;
