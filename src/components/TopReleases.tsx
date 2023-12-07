/* eslint-disable react/prop-types */
import {
	Box,
	Button,
	Heading,
	Icon,
	List,
	ListItem,
	useColorMode,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const TopReleases = ({ onClose }) => {
	const { colorMode } = useColorMode();
	const { pathname } = useLocation();
	const previousYear = new Date().getFullYear() - 1;

	return (
		<Box>
			<Heading
				mb={'16px'}
				fontSize={'24px'}
			>
				Top
			</Heading>

			<List mb={'24px'}>
				<ListItem
					mb={3}
					className='list-item'
				>
					<Link to={'/best-of-the-year'}>
						<Button
							fontWeight={
								pathname === '/best-of-the-year'
									? 'bold'
									: 'normal'
							}
							variant={'link'}
							color={'gray.50'}
							style={{ textDecoration: 'none' }}
							_hover={{ color: 'hsla(0,0%,100%,.4)' }}
							onClick={onClose}
						>
							<Box
								w={'32px'}
								minW={'32px'}
								mr={2}
								h={'32px'}
								borderRadius={'6px'}
								objectFit={'cover'}
								display={'flex'}
								bg={
									colorMode === 'dark'
										? 'gray.700'
										: 'gray.100'
								}
								className='list-box'
							>
								<Icon
									boxSize={'18px'}
									margin={'auto'}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 22'
								>
									<path
										d='M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z'
										fill='currentColor'
									/>
								</Icon>
							</Box>
							Best of the Year
						</Button>
					</Link>
				</ListItem>

				<ListItem
					mb={3}
					className='list-item'
				>
					<Link to={`/top-of-${previousYear}`}>
						<Button
							fontWeight={
								pathname === `/top-of-${previousYear}`
									? 'bold'
									: 'normal'
							}
							variant={'link'}
							color={'gray.50'}
							style={{ textDecoration: 'none' }}
							_hover={{ color: 'hsla(0,0%,100%,.4)' }}
							onClick={onClose}
						>
							<Box
								w={'32px'}
								minW={'32px'}
								mr={2}
								h={'32px'}
								borderRadius={'6px'}
								objectFit={'cover'}
								display={'flex'}
								bg={
									colorMode === 'dark'
										? 'gray.700'
										: 'gray.100'
								}
								className='list-box'
							>
								<Icon
									boxSize={'18px'}
									margin={'auto'}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 16'
								>
									<path
										fill='currentColor'
										fillRule='evenodd'
										d='M0 4h6v12H0V4zm9-4h6v16H9V0zm9 6h6v10h-6V6z'
									/>
								</Icon>
							</Box>
							Top of {previousYear}
						</Button>
					</Link>
				</ListItem>
			</List>
		</Box>
	);
};

export default TopReleases;
