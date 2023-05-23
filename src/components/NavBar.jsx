// import { Image } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import '../index.css';
import SwitchMode from './SwitchMode';

const NavBar = () => {
	return (
		<>
			<HStack justifyContent={'space-between'} mx={10} py={10}>
				<div className='logo'>RAWG</div>
				<SwitchMode />
			</HStack>
		</>
	);
};

export default NavBar;
