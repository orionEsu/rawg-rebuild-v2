import { Heading, Image, List, ListItem } from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import AlertCom from './AlertCom';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenres('genres');

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
						display={'flex'}
						alignItems={'center'}
						columnGap={'3'}
						key={genre.id}
						mb={3}
					>
						<Image
							src={getCroppedUrl(genre.image_background)}
							boxSize={'32px'}
							borderRadius={'5'}
							objectFit={'cover'}
						/>
						{genre.name}
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
