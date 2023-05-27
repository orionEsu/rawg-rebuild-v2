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
							whiteSpace={'normal'}
							textAlign={'left'}
							variant={'link'}
							style={{ textDecoration: 'none' }}
							_hover={{ color: 'hsla(0,0%,100%,.4)' }}
							onClick={() => onSelected(genre)}
							fontWeight={
								gameQuery.allYear ||
								gameQuery.nextWeek ||
								gameQuery.thisWeek ||
								gameQuery.lastestRelease
									? 'normal'
									: genre.id === gameQuery?.selected.id
									? 'bold'
									: ''
							}
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
