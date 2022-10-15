{/* TODO Abstract the button stuff out of this and NFTBanner */}
import { ConnectKitButton } from 'connectkit';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import Image from 'next/image';
import Link from 'next/link';
import * as logo from '../../public/images/logo_bottlebadge_sm.png';

export default function Nav() {
    const router = useRouter();
    const { address, isConnected, isConnecting, isDisconnected } = useAccount();

    return (
        <nav>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <Link href={'/'}>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <Image
                            src={logo}
                            alt={'Wine Vault Logo'}
                            width={203}
                            height={31}
                        />
                        <ConnectKitButton.Custom>
                        {({
                            isConnected,
                            isConnecting,
                            show,
                            hide,
                            // Use the address for whitelist checks
                            address,
                            truncatedAddress,
                            ensName,
                        }) => {
                            return (
                                <>
                                    <div className="p-2"></div>
                                    <p
                                        onClick={show}
                                        className="font-semibold text-sm text-gray-800 tracking-wide underline cursor-pointer transition-all hover:text-opacity-80"
                                    >
                                        {isConnected
                                            ? ensName
                                                ? `✅Connected as ${ensName}`
                                                : `✅Connected as ${truncatedAddress}`
                                            : 'Connect your wallet'}
                                    </p>
                                </>
                            );
                        }}
                    </ConnectKitButton.Custom>
                    </div>
                </Link>
            </div>
        </nav>
    );
}
