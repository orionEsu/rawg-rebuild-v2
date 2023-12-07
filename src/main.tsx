import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import theme from "./theme";
import router from './routes';
import '@fontsource/poppins';
import '@fontsource/orbitron/700.css';
import '@fontsource/exo-2/700.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 5,
			refetchOnReconnect: true,
		},
	},
})

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
