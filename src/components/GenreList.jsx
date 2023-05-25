import { Button, Heading, Image, List, ListItem } from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import AlertCom from './AlertCom';
import useGenres from '../hooks/useGenres';
import PropTypes from 'prop-types';

const GenreList = ({ onSelected, gameQuery }) => {
	const { data: genres, error } = useGenres();

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
						<Button
							fontWeight={
								genre.id === gameQuery?.selected.id
									? 'bold'
									: 'normal'
							}
							whiteSpace={'normal'}
							textAlign={'left'}
							variant={'link'}
							// _hover={{ fontWeight: 'bold' }}
							onClick={() => onSelected(genre)}
						>
							<Image
								src={getCroppedUrl(genre.image_background)}
								boxSize={'32px'}
								borderRadius={'5'}
								objectFit={'cover'}
								mr={2}
							/>
							{genre.name}
						</Button>
					</ListItem>
				))}
			</List>
		</>
	);
};

GenreList.propTypes = {
	onSelected: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default GenreList;
