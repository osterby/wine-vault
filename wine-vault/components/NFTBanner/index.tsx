{/* TODO Abstract the button stuff out of this and NAV */}
import { ConnectKitButton } from 'connectkit';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import Image from 'next/image';
import * as bottleBadge from '../../public/images/BottleBadge@1x.png';

export default function NFTBanner() {
    const router = useRouter();
    const { address, isConnected, isConnecting, isDisconnected } = useAccount();
    {
        /* TODO: check address to see if it's white listed before redirects, if not white list redirect to email subscription*/
    }
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-8 max-w-xl bg-skin-yellow border-4 border-[#1E1E1E] rounded-md border-solid shadow-[12px_12px_0_0_rgba(30,30,30)] gap-8 z-10">
            <div className="w-[160px] h-[160px] relative flex-shrink-0">
                <Image
                    src={bottleBadge}
                    alt={'Bottle logo'}
                    layout="responsive"
                />
            </div>

            <div className="flex flex-col gap-5 text-center md:text-left">
                <h3 className="font-semibold text-3xl tracking-wide">
                    Cohort NFT
                </h3>
                <div className="font-semibold text-xs tracking-wide leading-normal flex items-center md:justify-start opacity-80">
                    Earn a Cohort NFT by tracking your cellar.
                </div>
                <div className="flex flex-col items-center md:items-start">
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
                                    {/* TODO Update push */}
                                    <button
                                        onClick={() => router.push('/vault')}
                                        className="shadow-[4px_4px_0_0_rgba(30,30,30)] enabled:hover:translate-x-1 enabled:hover:translate-y-1 enabled:hover:shadow-none transition-all p-3 rounded-md border-2 border-black text-base font-semibold bg-skin-button-yellow  enabled:hover:bg-white normal-case disabled:cursor-not-allowed disabled:opacity-50"
                                        disabled={!isConnected}
                                    >
                                        Create your Wine Vault
                                    </button>
                                    <div className="p-2"></div>
                                    <p
                                        onClick={show}
                                        className="font-semibold text-sm text-gray-800 tracking-wide underline cursor-pointer transition-all hover:text-opacity-80"
                                    >
                                        {isConnected
                                            ? ensName
                                                ? `✅Connected as ${ensName}`
                                                : `✅Connected as ${truncatedAddress}`
                                            : 'Connect your wallet first'}
                                    </p>
                                </>
                            );
                        }}
                    </ConnectKitButton.Custom>
                </div>
            </div>
        </div>
    );
}
