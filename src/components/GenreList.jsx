import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
} from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import AlertCom from './AlertCom';
import useGenres from '../hooks/useGenres';
import PropTypes from 'prop-types';

const GenreList = ({ onSelected }) => {
	const { data: genres, error } = useGenres('genres');

	if (error) return <AlertCom msg={error} />;

	return (
		<>
			<Heading
				mb={'16px'}
				fontSize={'24px'}
			>
				Genres
			</Heading>
			<List>
				{genres.map((genre) => (
					<ListItem
						key={genre.id}
						mb={3}
					>
						<HStack>
							<Image
								src={getCroppedUrl(genre.image_background)}
								boxSize={'32px'}
								borderRadius={'5'}
								objectFit={'cover'}
							/>
							<Button
								whiteSpace={'normal'}
								textAlign={'left'}
								variant={'link'}
								onClick={() => onSelected(genre)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

GenreList.propTypes = {
	onSelected: PropTypes.func,
};

export default GenreList;
