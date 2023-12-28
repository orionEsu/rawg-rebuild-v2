/* eslint-disable react/prop-types */
import { SimpleGrid, Card, Heading, Skeleton } from '@chakra-ui/react';
import { Genre } from '../types';
import { arr } from '../data/loadingData';
import getCroppedUrl from '../services/image-url';
import { Link } from 'react-router-dom';

type TypeGridProps = {
	data: Genre;
	isLoading: boolean;
	parentPlatforms?: any;
};

const TypeGrid = ({ data, isLoading, parentPlatforms }: TypeGridProps) => {
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3 }}
			spacing={4}
			paddingRight={{
				base: 5,
				sm: 8,
				md: 14,
				xl: '40px',
			}}
			paddingLeft={{
				base: 5,
				md: 14,
				xl: 0,
			}}
			paddingBottom={14}
			marginTop={5}
		>
			{isLoading &&
				arr.map((el) => (
					<Skeleton
						height={'88px'}
						key={el}
					/>
				))}

			{data?.map((el, index) =>
				parentPlatforms ? (
					<Link
						to={`/games/${parentPlatforms[index].slug}`}
						key={el.id}
					>
						<Card
							padding={8}
							key={el.id}
							backgroundPosition={'center'}
							backgroundRepeat={'no-repeat'}
							backgroundSize={'cover'}
							backgroundImage={`linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32,0.9) 70%), url(${getCroppedUrl(
								el.image_background
							)})`}
						>
							<Heading
								size={'md'}
								textAlign={'center'}
								className='suggested__games-link'
								width={'fit-content'}
								margin={'auto'}
							>
								{el.name}
							</Heading>
						</Card>
					</Link>
				) : (
					<Link
						to={`/games/${el.slug}`}
						key={el.id}
					>
						<Card
							padding={8}
							key={el.id}
							backgroundPosition={'center'}
							backgroundRepeat={'no-repeat'}
							backgroundSize={'cover'}
							backgroundImage={`linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32,0.9) 70%), url(${getCroppedUrl(
								el.image_background
							)})`}
						>
							<Heading
								size={'md'}
								textAlign={'center'}
								className='suggested__games-link'
								width={'fit-content'}
								margin={'auto'}
							>
								{el.name}
							</Heading>
						</Card>
					</Link>
				)
			)}
		</SimpleGrid>
	);
};

export default TypeGrid;
