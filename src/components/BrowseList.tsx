import {
	Heading,
	Box,
	List,
	useColorMode,
	ListItem,
	Icon,
	Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useGameQueryStore from '../store';
import { useLocation } from 'react-router-dom';

const BrowseList = ({ onClose }: { onClose: () => void }) => {
	const { pathname } = useLocation();
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const setSearchValue = useGameQueryStore((s) => s.setSearchValue);
	const setSortValue = useGameQueryStore((s) => s.setSortValue);
	const { colorMode } = useColorMode();

	return (
		<>
			{' '}
			<Heading
				fontSize={'26px'}
				transition={'all 0.2s ease'}
				_hover={{
					color: 'hsla(0,0%,100%,.4)',
				}}
				color={'gray.50'}
				marginBlock={'30px'}
				maxWidth={'fit-content'}
				onClick={() => {
					setSearchValue('');
					setSortValue('');
				}}
			>
				<Link to={'games'}>All Games</Link>
			</Heading>
			<Box mb={'20px'}>
				<Heading
					color={'gray.50'}
					mb={'16px'}
					fontSize={'24px'}
				>
					Browse By:
				</Heading>

				<List>
					<ListItem mb={3}>
						<Link to={'platforms'}>
							<Button
								fontWeight={
									pathname === '/platforms'
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
										xmlns='http://www.w3.org/2000/svg'
										boxSize={'18px'}
										margin={'auto'}
										viewBox='0 0 22 16'
									>
										<path
											fill='currentColor'
											d='M21.535 6.966C20.455 2.123 18.934.928 18.008.45c-1.484-.767-3.204-.32-3.775-.031-.648.327-1.085.95-1.744 1.22-.761.31-1.796.395-2.575.02-.62-.3-1.168-.94-1.92-1.224-.952-.36-2.54-.865-4.11.238C3.512.933.864 3.11.068 9.904c-.491 4.19 1.854 5.539 1.768 5.478.604.423 1.955 1.14 3.786.018 1.223-.75 2.216-2.23 2.216-2.23s.443-.822 1.03-1.172c.416-.248 1.038-.06 1.038-.06h2.202s.699-.086 1.19.127c.476.203.745.706.745.706s1.451 1.837 2.842 2.773c.592.398 2.972.856 4.2-.614.803-.962 1.35-3.92.45-7.964zM9.773 6.537a.666.666 0 01-.667.666H7.438v1.668a.667.667 0 01-.666.667h-.5a.666.666 0 01-.667-.667V7.203h-1.67a.666.666 0 01-.666-.666v-.5c0-.368.299-.667.667-.667h1.668V3.705c0-.369.298-.668.667-.668h.5c.368 0 .667.299.667.668V5.37h1.668c.368 0 .667.298.667.667v.5zm4.698 2.333a1.25 1.25 0 11-.001-2.5 1.25 1.25 0 01.001 2.5zm2.293-2.776a1.237 1.237 0 110-2.473 1.237 1.237 0 010 2.473z'
										></path>
									</Icon>
								</Box>
								Platforms
							</Button>
						</Link>
					</ListItem>

					<ListItem mb={3}>
						<Link to={'genres'}>
							<Button
								variant={'link'}
								color={'gray.50'}
								fontWeight={
									pathname === '/genres' ? 'bold' : 'normal'
								}
								style={{ textDecoration: 'none' }}
								_hover={{ color: 'hsla(0,0%,100%,.4)' }}
								onClick={() => {
									onClose;
									setPlatformId('');
								}}
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
										xmlns='http://www.w3.org/2000/svg'
										boxSize={'18px'}
										margin={'auto'}
										viewBox='0 0 18 20'
									>
										<path
											fill='currentColor'
											d='M16.879 4.198c-.655-1.222-1.56-2.195-2.689-2.894C12.79.44 11.044 0 9 0 6.956 0 5.21.439 3.81 1.305c-1.13.698-2.034 1.672-2.688 2.893C.032 6.234 0 8.27 0 8.494v10.917c0 .084 0 .16.002.215.013.347.25.374.321.374.143 0 .222-.07.45-.293l.013-.012 2.148-2.677 2.144 2.655.024.026c.168.165.473.284.723.284h.21c.25 0 .555-.12.724-.284l.013-.013 2.154-2.671 2.144 2.656.025.027c.169.165.473.285.723.285h.21c.25 0 .555-.12.724-.284l.013-.013 2.154-2.671 2.144 2.664.024.027c.09.088.322.293.517.293.244 0 .396-.225.396-.589V8.494c0-.225-.031-2.26-1.121-4.296zM5.472 10.202c-1.106 0-2.002-.875-2.002-1.954 0-1.08.896-1.954 2.002-1.954 1.106 0 2.002.875 2.002 1.954s-.896 1.954-2.002 1.954zm7.004 0c-1.106 0-2.003-.875-2.003-1.954 0-1.08.897-1.954 2.003-1.954 1.105 0 2.002.875 2.002 1.954s-.897 1.954-2.002 1.954z'
										></path>
									</Icon>
								</Box>
								Genres
							</Button>
						</Link>
					</ListItem>
				</List>
			</Box>
		</>
	);
};

export default BrowseList;