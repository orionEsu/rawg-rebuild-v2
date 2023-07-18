import {
	Input,
	InputGroup,
	InputLeftElement,
	FormControl,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import '../index.css';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
	const setSearchValue = useGameQueryStore((state) => state.setSearchValue);

	const searchValue = useRef(null);
	const navigate = useNavigate();

	return (
		<FormControl
			onSubmit={(e) => {
				e.preventDefault();
				if (searchValue.current)
					setSearchValue(searchValue.current.value);
				navigate('/games');
				searchValue.current.value = '';
			}}
			width={{
				md: '500px',
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
					variant={'flushed'}
					placeholder='Search Games....'
					_placeholder={{
						opacity: 1,
						color: 'gray.200',
					}}
					focusBorderColor='gray.300'
					ref={searchValue}
				/>
			</InputGroup>
		</FormControl>
	);
};

export default SearchInput;
