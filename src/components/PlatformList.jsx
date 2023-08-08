/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import useParentPlatform from '../hooks/useParentPlatform';
import useGameQueryStore from '../store';
import AlertCom from './AlertCom';
import {
	ListItem,
	Button,
	Box,
	List,
	Heading,
	useColorMode,
	Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { iconMap } from '../data/iconMap';

const PlatformList = ({ onClose }) => {
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

	const { data: platforms, error } = useParentPlatform();
	const { colorMode } = useColorMode();
	if (error) return <AlertCom msg={error} />;

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
				<Link to={'/platforms'}>Platforms</Link>
			</Heading>
			<List>
				{platforms?.results.slice(0, 6).map((el) => (
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
									setPlatformId(el.id);
									onClose();
								}}
								fontWeight={
									el.id === platformId ? 'bold' : 'normal'
								}
							>
								<Box
									w={'32px'}
									minW={'32px'}
									mr={2}
									h={'32px'}
									borderRadius={'6px'}
									objectFit={'cover'}
									display={'flex'}
									justifyContent={'center'}
									alignContent={'center'}
									alignItems={'center'}
									bg={
										colorMode === 'dark'
											? 'gray.700'
											: 'gray.100'
									}
									className='list-box'
								>
									<Icon as={iconMap[el.slug]} />
								</Box>
								{el.name}
							</Button>
						</Link>
					</ListItem>
				))}
			</List>
		</>
	);
};

PlatformList.propTypes = {
	onSelected: PropTypes.func,
	gameQuery: PropTypes.object,
};

export default PlatformList;
