import Image from 'next/image';
import * as bottleBadge from '../../public/images/BottleBadge@1x.png';

export default function Message() {
    return (
        <div className="p6
                        max-w-sm
                        mx-auto
                        bg-white
                        rounded-xl
                        shadow-lg
                        flex
                        items-center 
                        space-x-4">
            <div className="shrink-0">
            <Image
                    src={bottleBadge}
                    alt={'Bottle logo'}
                    layout="responsive"
                    className='h-12 w-12'
                />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>
    );
}