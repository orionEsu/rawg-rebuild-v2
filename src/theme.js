// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const breakpoints = {
	sm: '350px',
	md: '650px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
};

// 3. extend the theme
const theme = extendTheme({
	config,
	breakpoints,
	colors: {
		gray: {
			50: '#F9F9F9',
			100: '#ededed',
			200: '#d3d3d3',
			300: '#b3b3b3',
			400: '#a0a0a0',
			500: '#898989',
			600: '#6c6c6c',
			700: '#202020',
			800: '#121212',
			900: '#111',
		},
	},
	fonts: {
		heading: `'Exo 2', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
});

export default theme;
