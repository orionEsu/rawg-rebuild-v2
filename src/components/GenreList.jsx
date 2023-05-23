import { Box, Heading, Image, List, ListItem } from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import useGames from '../hooks/useGames';
import AlertCom from './AlertCom';

const GenreList = () => {
	const { data: genres, error, isLoading } = useGames('genres');

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
