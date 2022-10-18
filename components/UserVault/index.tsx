{/* TODO Abstract the button stuff out of this and NAV */}
import { ConnectKitButton } from 'connectkit';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import Image from 'next/image';
import * as bottleBadge from '../../public/images/BottleBadge@1x.png';
import NFTBanner from '../NFTBanner';

export default function Vault() {
    const router = useRouter();
    const { address, isConnected, isConnecting, isDisconnected } = useAccount();
    {
        /* TODO: check address to see if it's white listed before redirects, if not white list redirect to email subscription*/
    }
    if (isConnected)
        return (
        <div className="flex flex-col md:flex-row justify-between items-center p-8 max-w-xl bg-skin-yellow border-4 border-[#1E1E1E] rounded-md border-solid shadow-[12px_12px_0_0_rgba(30,30,30)] gap-8 z-10">
            <div className="w-[160px] h-[160px] relative flex-shrink-0">
                <Image
                    src={bottleBadge}
                    alt={'Bottle logo'}
                    layout="responsive"
                />
            </div>
                {/** TODO test whether a vault exists or not */}
            <div className="flex flex-col gap-5 text-center md:text-left">
                <h3 className="font-semibold text-3xl tracking-wide">
                    Open a Vault
                </h3>
                <div className="font-semibold tracking-wide leading-normal flex items-center md:justify-start opacity-80">
                    We&apos;ll connect a Wine Vault to your wallet address. 
                </div>
                <div className="flex flex-col text-xs items-center md:items-start">
                    Then you can add in bottles from your personal collection 
                    or bottles that you&apos;d like to have in your collection. 
                </div>
                <div className="flex flex-col text-xs items-center md:items-start">
                    <input
                        className="appearance-none border-2 border-black rounded p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-skin-button-yellow focus:ring-2 focus:ring-offset-transparent focus:ring-offset-2"
                        id="valutName"
                        type="text"
                        placeholder="amber-dialectic"
                    />
                    <button className="shadow-[4px_4px_0_0_rgba(30,30,30)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all p-3 rounded-md border-2 border-black text-sm font-semibold bg-skin-button-yellow  hover:bg-white normal-case">
                        Name your first Vault
                    </button>
                </div>
            </div>

        </div>
    );
    return (      
        <NFTBanner />
    );
}
