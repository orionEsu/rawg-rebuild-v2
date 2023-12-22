/* eslint-disable react/prop-types */
import { Heading, List, ListItem, Button, Image } from '@chakra-ui/react';
import getCroppedUrl from '../services/image-url';
import { Link } from 'react-router-dom';
import useGameQueryStore from '../store';

const DisplayList = ({ link, heading, data, onClose }) => {
	const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
	const setGenreId = useGameQueryStore((state) => state.setGenreId);
	console.log(data)
	return (
		<>
			<Heading
				display={'block'}
				width={'fit-content'}
				mb={'16px'}
				fontSize={'24px'}
				_hover={{
					color: 'hsla(0,0%,100%,.4)',
					transition: 'all 0.3s ease',
				}}
			>
				<Link to={link}>{heading}</Link>
			</Heading>
			<List>
				{data?.results.slice(0, 6).map((el) => (
					<ListItem
						key={el.id}
						mb={3}
					>
						<Link to={`games/${el.slug}`}>
							<Button
								whiteSpace={'normal'}
								textAlign={'left'}
								variant={'link'}
								style={{ textDecoration: 'none' }}
								color={'gray.50'}
								_hover={{
									filter: 'auto',
									brightness: '50%',
									transition: 'all 0.3s ease-in-out',
								}}
								onClick={() => {
									setGenreId(el.id);
									onClose();
								}}
								fontWeight={
									el.id === genreId ? 'bold' : 'normal'
								}
							>
								<Image
									src={getCroppedUrl(el.image_background)}
									boxSize={'32px'}
									borderRadius={'5'}
									objectFit={'cover'}
									mr={2}
								/>
								{el.name}
							</Button>
						</Link>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default DisplayList;
