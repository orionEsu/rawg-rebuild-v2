// import { Image } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import '../index.css';
import SwitchMode from './SwitchMode';
import SearchInput from './SearchInput';

const NavBar = ({ onSearchEnter }) => {
	return (
		<>
			<HStack
				justifyContent={'space-between'}
				mx={10}
				py={10}
			>
				<div className='logo'>RAWG</div>
				<SearchInput onSearchEnter={onSearchEnter} />
				<SwitchMode />
			</HStack>
		</>
	);
};

export default NavBar;
