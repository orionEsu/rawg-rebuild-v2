import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const SearchInput = ({ onSearchEnter }) => {
	const searchValue = useRef(null);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (searchValue.current)
					onSearchEnter(searchValue.current.value);
				searchValue.current.value = '';
			}}
		>
			<InputGroup size={'lg'}>
				<InputLeftElement
					color='gray.300'
					fontSize='1em'
					pointerEvents={'none'}
				>
					<SearchIcon />
				</InputLeftElement>

				<Input
					placeholder='Search through 824,000 Games'
					width={'800px'}
					borderRadius={15}
					color={'gray.300'}
					fontSize={'16px'}
					ref={searchValue}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
