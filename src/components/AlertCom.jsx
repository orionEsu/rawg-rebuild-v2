import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

const AlertCom = ({ msg }) => {
	return (
		<Alert status='error'>
			<AlertIcon />
			<AlertTitle>{msg}</AlertTitle>
		</Alert>
	);
};

export default AlertCom;
