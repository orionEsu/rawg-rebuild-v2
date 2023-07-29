import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link, useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

const ErrorBoundary = () => {
	const error = useRouteError();

	if (!isRouteErrorResponse(error)) return;
	return (
		<>
			<Box
				display={'flex'}
				flexDirection={'column'}
				paddingLeft={'13rem'}
				height={'100vh'}
				margin={'auto'}
				justifyContent={'center'}
			>
				<Heading
					fontSize={'200px'}
					fontWeight={'700'}
					marginBottom={10}
				>
					404
				</Heading>
				<Text
					fontSize={'xl'}
					fontWeight={'600'}
					marginBottom={6}
				>
					Page not found.
				</Text>
				<Link to={'/'}>
					<Button
						boxShadow={'0 0 20px 0 hsla(0,0%,100%,.2)'}
						backgroundColor={'#fff'}
						color={'#000'}
						transition={'backgroundColor .3s ease'}
						_hover={{
							backgroundColor: 'rgba(255,255,255, 0.7)',
						}}
						width={'300px'}
						paddingBlock={6}
						fontSize={'lg'}
					>
						Go Home
					</Button>
				</Link>
			</Box>
			<Box
				backgroundColor={'transparent'}
				backgroundImage={
					'linear-gradient(to left, rgba(0, 0, 0, 0.7), rgb(21, 21, 21)), url("https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg")'
				}
				position={'absolute'}
				top={0}
				height={'100%'}
				width={'100%'}
				zIndex={'-2'}
				backgroundRepeat={'no-repeat'}
				backgroundPosition={'center'}
				backgroundSize={'cover'}
			>
			</Box>
		</>
	);
};

export default ErrorBoundary;
