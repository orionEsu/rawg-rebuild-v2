import { Box, HStack, Text } from '@chakra-ui/react';
import '../index.css';
import SearchInput from './SearchInput';
import SwitchMode from './SwitchMode';

const NavBar = () => {
	return (
		<>
			<Box
				justifyContent={'space-between'}
				px={10}
				my={6}
				marginTop={10}
				align={'center'}
				display={{ md: 'flex' }}
				alignItems={'center'}
				gap={'40px'}
			>
				<Text
					className='logo'
					fontSize={'18px'}
					fontWeight={'extrabold'}
					lineHeight={1}
					letterSpacing={'5px'}
					color={'#fff'}
					position={'relative'}
					display={{ md: 'block' }}
					textAlign={{ md: 'left' }}
					flex={0.5}
					marginBottom={{ base: '25px', sm: '25px', md: '0' }}
				>
					RAWG
				</Text>
				<HStack
					flex={1}
					justifyContent={'space-between'}
					gap={10}
				>
					<SearchInput />
					<SwitchMode />
				</HStack>
			</Box>
		</>
	);
};

export default NavBar;
