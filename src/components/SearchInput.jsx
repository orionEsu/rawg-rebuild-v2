import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import '../index.css';
import useGameQueryStore from '../store';

const SearchInput = () => {
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	const searchValue = useRef(null);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (searchValue.current)
					setSearchValue(searchValue.current.value);
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
					placeholder='Search Games....'
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
