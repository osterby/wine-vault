import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
    getDefaultClient({
        appName: 'Free Range Dao',
        alchemyId,
    })
);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig client={client}>
            <ConnectKitProvider
                mode="auto"
                customTheme={{
                    '--ck-font-family':
                        '"IBM Plex Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
            >
                <Component {...pageProps} />
            </ConnectKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;
