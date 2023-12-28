import {
	Box,
	Button,
	Heading,
	Icon,
	List,
	ListItem,
	useColorMode,
} from '@chakra-ui/react';
import '../index.css';
import { Link, useLocation } from 'react-router-dom';

const NewReleasesList = ({ onClose }: {
	onClose: () => void;
}) => {
	const { colorMode } = useColorMode();
	const { pathname } = useLocation();

	return (
		<>
			<Heading
				mb={'16px'}
				fontSize={'24px'}
			>
				New Releases
			</Heading>

			<List mb={'24px'}>
				<ListItem
					mb={3}
					className='list-item'
				>
					<Link to={'/last-30-days'}>
						<Button
							fontWeight={
								pathname === '/last-30-days' ? 'bold' : 'normal'
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
									viewBox='0 0 24 24'
								>
									<path
										fill='currentColor'
										d='M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z'
									/>
								</Icon>
							</Box>
							Last 30 days
						</Button>
					</Link>
				</ListItem>

				<ListItem
					mb={3}
					className='list-item'
				>
					<Link to={'/this-week'}>
						<Button
							fontWeight={
								pathname === '/this-week' ? 'bold' : 'normal'
							}
							variant={'link'}
							color={'gray.50'}
							_hover={{ color: 'hsla(0,0%,100%,.4)' }}
							onClick={onClose}
							// onClick={onSelectThisWeek}
						>
							<Box
								w={'32px'}
								minW={'32px'}
								h={'32px'}
								mr={2}
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
									viewBox='0 0 19 26'
								>
									<path
										fill='currentColor'
										d='M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z'
									/>
								</Icon>
							</Box>
							This week
						</Button>
					</Link>
				</ListItem>

				<ListItem
					mb={3}
					className='list-item'
				>
					<Link to={'/next-week'}>
						<Button
							fontWeight={
								pathname === '/next-week' ? 'bold' : 'normal'
							}
							variant={'link'}
							color={'gray.50'}
							_hover={{ color: 'hsla(0,0%,100%,.4)' }}
							onClick={onClose}
						>
							<Box
								w={'32px'}
								minW={'32px'}
								h={'32px'}
								mr={2}
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
									viewBox='0 0 20 16'
								>
									<path
										fill='currentColor'
										d='M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z'
									/>
								</Icon>
							</Box>
							Next week
						</Button>
					</Link>
				</ListItem>
			</List>
		</>
	);
};

export default NewReleasesList;
