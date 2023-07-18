import { Box, Text } from '@chakra-ui/react';
import '../index.css';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<>
			<Box
				px={10}
				my={6}
				marginTop={10}
				display={'flex'}
				alignContent={'center'}
				alignItems={'center'}
				justifyContent={'space-between'}
				flexDirection={{
					base: 'column',
					lg: 'row',
				}}
				rowGap={5}
			>
				<Text
					fontSize={'18px'}
					fontWeight={'extrabold'}
					lineHeight={1}
					letterSpacing={'5px'}
					color={'#fff'}
				>
					RAWG
				</Text>
				<SearchInput />
			</Box>
		</>
	);
};

export default NavBar;
