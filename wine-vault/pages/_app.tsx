import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { configureChains, chain, WagmiConfig, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const { log } = console;
const alchemyId = process.env.ALCHEMY_ID;
const AIRTABLE_BASE = process.env.AIRTABLE_BASE;
const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

const { chains, provider, webSocketProvider } = configureChains(
    [chain.goerli],
    [alchemyProvider({apiKey: alchemyId})],
  )

const client = createClient(
    getDefaultClient({
        appName: 'Wine Vault',
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
