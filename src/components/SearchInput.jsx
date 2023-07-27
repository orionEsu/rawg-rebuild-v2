import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
	const searchValue = useRef(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const searchedValue = searchValue.current.value;
		if (searchedValue === ' ' || searchedValue === null) {
			document.querySelector('.error_message').classList.add('show');
		} else {
			navigate(`/search/${searchedValue}`);
			document.querySelector('.error_message').classList.remove('show');
			e.target.reset();
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
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
					type='text'
					placeholder='Search Games....'
					_placeholder={{
						opacity: 1,
						color: 'gray.500',
					}}
					focusBorderColor='gray.300'
					ref={searchValue}
				/>
			</InputGroup>
			<p className='error_message'>Enter Game Name</p>
		</form>
	);
};

export default SearchInput;
