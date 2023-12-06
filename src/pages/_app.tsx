import '@/styles/globals.css';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</QueryClientProvider>
	);
}
