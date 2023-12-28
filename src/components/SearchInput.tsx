import {
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FormEvent, useRef } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const SearchInput = () => {
	const searchValue = useRef<HTMLInputElement | null>(null);
	const errorRef = useRef<HTMLParagraphElement | null>(null);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const searchedValue = searchValue?.current?.value;
		if (searchedValue === ' ' || searchedValue === null) {
			errorRef?.current?.classList.add('show');
		} else {
			navigate(`/search`);
			searchedValue && setSearchParams({ query: searchedValue });
			document.title = `${searchedValue} ▫ RAWG`;
			errorRef?.current?.classList.remove('show');
			(e.target as HTMLFormElement).reset();
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
			<p
				className='error_message'
				ref={errorRef}
			>
				Enter Game Name
			</p>
		</form>
	);
};

export default SearchInput;
